'use server';

import { ollama, createOllama } from 'ollama-ai-provider-v2';
import { generateText, type ModelMessage, Output, tool } from 'ai';
import { z } from 'zod';
import reactElementToJSXString from 'react-element-to-jsx-string';

import availableComponents from '../availableComponents.json';
import componentProps from '../componentProps.json';

import ComponentFactory from '@/components/ComponentFactory/ComponentFactory';

// const ollama = createOllama({
//   baseURL: 'http://v0workshop.ameersami.com:11434/api'
// });

const propSchema = z.object({
  propName: z.string().describe('The name of the prop to be configured on this component'),
  propValue: z.string().describe('The value to be set for the prop on this component')
});

const componentSchema = z.object({
  componentName: z.string().describe('Name of the component that should be rendered'),
  childrenComponents: z.array(z.any()).optional(),
  props: z.array(propSchema)
});

const componentsArraySchema = z.array(componentSchema).superRefine((components, ctx) => {
  components.forEach((component, index) => {
    if (component.childrenComponents !== undefined) {
      if (!Array.isArray(component.childrenComponents)) {
        ctx.addIssue({
          code: z.ZodIssueCode.invalid_type,
          expected: 'array',
          received: typeof component.childrenComponents,
          path: [index, 'childrenComponents']
        });
        return;
      }
      
      const childrenValidation = z.array(componentSchema).safeParse(component.childrenComponents);
      if (!childrenValidation.success) {
        childrenValidation.error.issues.forEach(issue => {
          ctx.addIssue({
            ...issue,
            path: [index, 'childrenComponents', ...issue.path]
          });
        });
      }
    }
  });
});

export type Component = z.infer<typeof componentSchema>;
const schema = componentsArraySchema;

export default async (messages: Array<ModelMessage>) => {

  const { response, experimental_output } = await generateText({
    model: ollama('qwen3-coder'),
    experimental_output: Output.object({
      schema: schema,
    }),
    tools: {
      componentProps: tool({
        description: 'Must be used to retrieve all available props for a component',
        inputSchema: z.object({
          componentName: z.string().describe('Name of the component to retrieve props for'),
        }),
        execute: async ({ componentName }) => {

          if ((componentProps as any)[componentName]) {
            return (componentProps as any)[componentName]
          }

          return `The ${componentName} component does not exist.`
        }
      })
    },
    messages: [
      {
        role: 'system',
        content: `
          You are a helpful agent that creates a JSON schema to construct a web application interface. The schema should match the following format:
          {
            components: [{
              componentName: string;
              childrenComponents: array;
              props: [{
                propName: string;
                propValue: string;
              }];
            }]
          }

          To retrieve all of the available component props you must call the provided tool, you are not allowed to create your own prop names for any component. You are not allowed to create a new custom component.

          A Text component does not exist.

          You must generate a schema for the web application interface that adheres to what the user is requesting via the prompt.

          You may use any tailwind CSS utility classes on any component through the className prop to add styles.

          Here is a list of the components available to you:
          ${availableComponents.map(component => `Component name: ${component.title}\nComponent description: ${component.description}`)}
        `
      },
      ...messages
    ]
  });

  const comps = (
    ComponentFactory({
      components: experimental_output
    })
  );

  console.log(experimental_output);

  return {
    componentTextString: reactElementToJSXString(comps),
    components: (
      <ComponentFactory
        components={experimental_output}
      />
    ),
    messages: [
      ...messages,
      ...response.messages
    ]
  };
}

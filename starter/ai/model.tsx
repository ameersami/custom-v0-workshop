'use server';
import { type ModelMessage } from 'ai';
import { z } from 'zod';

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

}

'use server';

import { Component } from "@/ai/model";
import { getComponent } from "@/getComponents";
import { createElement } from "react";

const DynamicComponent = ({ type, props, children }: any) => {
  return createElement(type, props, children);
}

const ComponentFactory = ({ components }: { components: Array<Component> }) => {

  const generatedComponents = components.map(generateChild);

  return (
    <>
      {...generatedComponents}
    </>
  );
};

const generateChild = (component: Component) => {
  if (!component?.componentName) {
      return (
        <></>
      );
    }

  let FoundComponent = getComponent(component.componentName);
  if (!FoundComponent) {
    const firstChar = component.componentName.charAt(0);
    if (firstChar === firstChar.toLowerCase()) {
      FoundComponent = (props) => DynamicComponent({ type: component.componentName, ...props }) as any;
    } else {
      return (
        <></>
      );
    }

  }

  const mappedProps: Record<string, any> = {};
  const children = [];
  component.props.forEach(prop => {
    mappedProps[prop.propName] = prop.propValue;
  });
  if (mappedProps?.children) {
    children.push(mappedProps?.children);
  }
  if (component?.childrenComponents?.length) {
    children.push(component?.childrenComponents?.map(child => generateChild(child)));
  }

  if (children.length) {
    return (
      <FoundComponent
        {...mappedProps}
        key={crypto.randomUUID()}
      >
        {children}
      </FoundComponent>
    )
  }

  return (
    <FoundComponent
      {...mappedProps}
      key={crypto.randomUUID()}
    />
  )
};

export default ComponentFactory;

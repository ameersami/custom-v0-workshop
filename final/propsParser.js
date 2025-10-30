const fs = require('fs');
const matter = require('gray-matter');

const docgen = require("react-docgen-typescript");

const options = {
  savePropValueAsString: true,
};

const componentFileNames = fs.readdirSync('./componentDocs').map(file => {
  
  const { data } = matter(fs.readFileSync(`./componentDocs/${file}`).toString());

  return {
    title: data.title,
    description: data.description,
    fileName: file.split('.')[0]
  }
});

const componentImports = [];
const componentExports = [];

const componentNames = new Map();
const componentProps = {};
componentFileNames.forEach(({ fileName }) => {
  const props = docgen.parse(`./components/ui/${fileName}.tsx`, options);

  if (!props.length) {
    return;
  }

  componentImports.push(`import { ${props.map(component => component.displayName).join(', ')} } from './components/ui/${fileName}' `);
  componentExports.push(...props.map(component => component.displayName));

  props.forEach(component => {

    componentNames.set(component.displayName, {
      title: component.displayName,
      description: component.description,
      fileName: component.filePath
    });

    const props = {}
    Object.keys(component.props).forEach((propKey) => {
      const { defaultValue, description, name, type, required } = component.props[propKey];

      props[propKey] = {
        defaultValue,
        description,
        name,
        type,
        required
      }
    });

    componentProps[component.displayName] = {
      props,
      componentName: component.displayName,
      methods: component.methods
    };
  });
});

fs.writeFileSync('availableComponents.json', JSON.stringify(Array.from(componentNames.values())));
fs.writeFileSync('componentProps.json', JSON.stringify(componentProps));
fs.writeFileSync('index.js', `
  ${componentImports.join('\n')}
  export {
    ${componentExports.join(',\n')}
  }
`);

const propTypesTemplate = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl },
) => {
  return tpl`
import React, { CSSProperties } from 'react';

type CyberElProps = {
  id?: string;
  className?: string;
  style?: CSSProperties;
  [x: string]: any;
}

const ${componentName}= (props: CyberElProps) => {
  return (
    ${jsx}
  )
}

${exports}
  `
}

module.exports = propTypesTemplate

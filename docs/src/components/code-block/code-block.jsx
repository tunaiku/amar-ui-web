import React from 'react';
import classNames from 'classnames';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { DEFAULT_CODE_BLOCK_THEME } from './code-block.config';
import './code-block.scss';

const CodeBlock = ({ codeString, className, language }) => {
  const trimmedCodeString = codeString.trim();
  const cssClasses = classNames('CodeBlock', className);

  return (
    <div className={cssClasses}>
      <Highlight
        {...defaultProps}
        theme={DEFAULT_CODE_BLOCK_THEME}
        code={trimmedCodeString}
        language={language}>
        {({ className: innerClassName, style, tokens, getLineProps, getTokenProps }) => {
          return (
            <pre className={innerClassName} data-language={language} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          );
        }}
      </Highlight>
    </div>
  );
};

export default CodeBlock;

import React from 'react';
import JsxParser from 'react-jsx-parser';
import { CodePreviewContainer, CodePreviewDisplay, CodePreviewBlock } from '../code-preview';
import './code-preview.scss';

const CodePreview = props => {
  const { codeString, bgColor, size } = props;

  const parseCode = string => {
    return <JsxParser renderInWrapper={false} jsx={string} />;
  };

  return (
    <CodePreviewContainer>
      <CodePreviewDisplay size={size} bgColor={bgColor}>
        {parseCode(codeString)}
      </CodePreviewDisplay>
      <CodePreviewBlock {...props} />
    </CodePreviewContainer>
  );
};

export default CodePreview;

import React from 'react';

const Dialog = () => {
  return (
    <div className="DialogPage">
      <div className="Dialog">
        <div className="Dialog-box">
          <div className="Dialog-block">
            <div className="Heading-5 FontWeight-bold PaddingBottom">Dialog Title</div>
            <p className="Color-gray-50">Description text here.</p>
          </div>
          <div className="Dialog-block Flex JustifyContent-end">
            <button className="Button Button--text MarginRight-2xsmall Button--secondary">
              Decline
            </button>
            <button className="Button Button--text Button--secondary">Submit</button>
          </div>
        </div>
        <div className="Dialog-backdrop"></div>
      </div>
    </div>
  );
};

export default Dialog;

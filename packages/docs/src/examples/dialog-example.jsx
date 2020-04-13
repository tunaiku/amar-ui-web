import React, { useState } from 'react';

const DialogExample = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const toggleDialog = () => setDialogOpen(!isDialogOpen);

  return (
    <div className="MarginBottom">
      <button className="Button Button--primary" onClick={toggleDialog}>
        See in action!
      </button>
      {isDialogOpen && (
        <div className="Dialog">
          <div className="Dialog-box">
            <div className="Dialog-block">
              <h5 className="MarginBottom">Dialog Title</h5>
              <p>Description of the dialog goes here.</p>
            </div>
            <div className="Dialog-block">
              <button className="Button Button--danger Button--fullWidth" onClick={toggleDialog}>
                Close
              </button>
            </div>
          </div>
          <div className="Dialog-backdrop"></div>
        </div>
      )}
    </div>
  );
};

export default DialogExample;

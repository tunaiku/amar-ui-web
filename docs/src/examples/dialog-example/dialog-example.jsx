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
            <div class="Dialog-header">
              <h5 className="Dialog-title">Dialog Title</h5>
            </div>
            <div className="Dialog-content">
              <p>Description of the dialog goes here.</p>
            </div>
            <div className="Dialog-actions">
              <button className="Button Button--text Button--danger" onClick={toggleDialog}>
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

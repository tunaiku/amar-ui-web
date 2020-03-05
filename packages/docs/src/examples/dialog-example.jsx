import React, { useState } from 'react';

const DialogExample = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const toggleDialog = () => setDialogOpen(!isDialogOpen);

  return (
    <div className="MarginBottom">
      <button className="Button Button--primary" onClick={toggleDialog}>
        Click to open Dialog
      </button>
      {isDialogOpen && (
        <div class="Dialog">
          <div class="Dialog-box">
            <div class="Dialog-block">
              <h5 className="MarginBottom">Dialog Title</h5>
              <p>Description of the dialog goes here.</p>
            </div>
            <div class="Dialog-block">
              <button class="Button Button--danger Button--fullWidth" onClick={toggleDialog}>
                Close
              </button>
            </div>
          </div>
          <div class="Dialog-backdrop"></div>
        </div>
      )}
    </div>
  );
};

export default DialogExample;

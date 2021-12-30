import React, { useState } from 'react';

const BottomSheetExample = () => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

  const toggleBottomSheet = () => setBottomSheetOpen(!isBottomSheetOpen);

  return (
    <div className="MarginBottom">
      <button className="Button Button--primary" onClick={toggleBottomSheet}>
        See it in action!
      </button>
      {isBottomSheetOpen && (
        <div className="BottomSheet">
          <div className="BottomSheet-container">
            <div className="BottomSheet-dialog">
              <div className="BottomSheet-media">
                <img
                  alt="BottomSheetExample"
                  src="https://res.cloudinary.com/dwhvwfzcm/image/upload/v1593543146/undraw_working_from_anywhere_ub67_wg7r8a.svg"
                  style={{ width: '150px' }}
                />
              </div>
              <div className="BottomSheet-body">
                <h5 className="BottomSheet-title">Selamat, Pinjaman Anda telah lunas!</h5>
                <p className="Color-gray-50 MarginBottom">
                  Terima kasih telah menggunakan pinjaman Tunaiku. Surat keterangan lunas akan
                  dikirim ke alamat Anda.
                </p>
                <button className="Button Button--fullWidth Button--success">
                  Ajukan Pinjaman Lagi
                </button>
              </div>
            </div>
          </div>
          <span className="BottomSheet-backdrop" role="button" onClick={toggleBottomSheet}></span>
        </div>
      )}
    </div>
  );
};

export default BottomSheetExample;

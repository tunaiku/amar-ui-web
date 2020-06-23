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
              <div className="BottomSheet-block PaddingTop-xlarge PaddingBottom-xlarge">
                <div className="Flex JustifyContent-center">
                  <img
                    alt="BottomSheetExample"
                    src="https://assets-global.website-files.com/5bfd1275cc56e15ce750b18e/5d0521f085f49b4ae4a43c79_28.png"
                    style={{ width: '150px' }}
                  />
                </div>
              </div>
              <div className="BottomSheet-block">
                <h5 className="MarginBottom-2xsmall">
                  Selamat, Pinjaman Anda telah lunas!
                </h5>
                <p className="Color-gray-50 MarginBottom">
                  Terima kasih telah menggunakan pinjaman Tunaiku. Surat
                  keterangan lunas akan dikirim ke alamat Anda.
                </p>
                <button className="Button Button--fullWidth Button--success">
                  Ajukan Pinjaman Lagi
                </button>
              </div>
            </div>
          </div>
          <span
            className="BottomSheet-backdrop"
            role="button"
            onClick={toggleBottomSheet}></span>
        </div>
      )}
    </div>
  );
};

export default BottomSheetExample;

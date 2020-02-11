import React, { useState } from 'react';

const BottomSheetExample = () => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

  const toggleBottomSheet = () => setBottomSheetOpen(!isBottomSheetOpen);

  return (
    <div className="MarginBottom">
      <button className="Button Button--primary" onClick={toggleBottomSheet}>
        Click to open bottom sheet!
      </button>
      {isBottomSheetOpen && (
        <div class="BottomSheet">
          <div class="BottomSheet-container">
            <div class="BottomSheet-dialog">
              <div class="BottomSheet-block PaddingTop-xlarge PaddingBottom-xlarge">
                <div class="Flex JustifyContent-center">
                  <img
                    src="https://assets-global.website-files.com/5bfd1275cc56e15ce750b18e/5d0521f085f49b4ae4a43c79_28.png"
                    style={{ width: '150px' }}
                  />
                </div>
              </div>
              <div class="BottomSheet-block">
                <h5 class="MarginBottom-2xsmall">Selamat, Pinjaman Anda telah lunas!</h5>
                <p class="Color-gray-50 MarginBottom">
                  Terima kasih telah menggunakan pinjaman Tunaiku. Surat keterangan lunas akan
                  dikirim ke alamat Anda.
                </p>
                <button class="Button Button--fullWidth Button--success">
                  Ajukan Pinjaman Lagi
                </button>
              </div>
            </div>
          </div>
          <div class="BottomSheet-backdrop" onClick={toggleBottomSheet}></div>
        </div>
      )}
    </div>
  );
};

export default BottomSheetExample;

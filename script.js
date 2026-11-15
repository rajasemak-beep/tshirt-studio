// T-SHIRT STUDIO
// Sistem pergantian tampilan kaos

const viewButtons = document.querySelectorAll(".buttons button");

const previewTitle = document.querySelector(".preview h2");

// Fungsi memilih tampilan kaos
viewButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Hapus status aktif dari semua tombol
        viewButtons.forEach((item) => {
            item.classList.remove("active");
        });

        // Aktifkan tombol yang dipilih
        button.classList.add("active");

        // Ubah judul preview
        const selectedView = button.textContent.toUpperCase();

        previewTitle.textContent =
            "PREVIEW DESAIN KAOS - " + selectedView;

    });

});

console.log("T-Shirt Studio berhasil dijalankan!");

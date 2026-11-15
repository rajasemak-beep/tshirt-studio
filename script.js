// T-SHIRT STUDIO

const viewButtons = document.querySelectorAll(".buttons button");
const previewTitle = document.querySelector(".preview h2");

const shirtBody = document.getElementById("shirtBody");
const shirtColor = document.getElementById("shirtColor");
const shirtSize = document.getElementById("shirtSize");

// Menyimpan tampilan yang sedang dipilih
let selectedView = "DEPAN";

// Memperbarui judul preview
function updatePreviewTitle() {
    const selectedSize = shirtSize.value;

    previewTitle.textContent =
        "PREVIEW DESAIN KAOS - " +
        selectedView +
        " | UKURAN " +
        selectedSize;
}

// Fungsi tombol depan dan belakang
viewButtons.forEach((button) => {

    button.addEventListener("click", () => {

        viewButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        selectedView = button.textContent.trim().toUpperCase();

        updatePreviewTitle();
    });

});

// Fungsi perubahan warna
shirtColor.addEventListener("input", () => {

    shirtBody.setAttribute("fill", shirtColor.value);

});

// Fungsi pilihan ukuran
shirtSize.addEventListener("change", () => {

    updatePreviewTitle();

});

// Judul awal
updatePreviewTitle();

console.log("T-Shirt Studio berhasil dijalankan!");

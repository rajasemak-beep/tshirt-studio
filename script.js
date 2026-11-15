// T-SHIRT STUDIO

const viewButtons = document.querySelectorAll(".buttons button");
const previewTitle = document.querySelector(".preview h2");

const shirtFront = document.getElementById("shirtFront");
const shirtBack = document.getElementById("shirtBack");

const shirtBodyFront = document.getElementById("shirtBodyFront");
const shirtBodyBack = document.getElementById("shirtBodyBack");

const shirtColor = document.getElementById("shirtColor");
const shirtSize = document.getElementById("shirtSize");

let selectedView = "DEPAN";

// Memperbarui judul preview
function updatePreviewTitle() {

    previewTitle.textContent =
        "PREVIEW DESAIN KAOS - " +
        selectedView +
        " | UKURAN " +
        shirtSize.value;

}

// Mengatur tampilan depan dan belakang
function updateShirtView() {

    if (selectedView === "DEPAN") {

        shirtFront.style.display = "inline";
        shirtBack.style.display = "none";

    } else {

        shirtFront.style.display = "none";
        shirtBack.style.display = "inline";

    }

}

// Tombol depan dan belakang
viewButtons.forEach((button) => {

    button.addEventListener("click", () => {

        viewButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        selectedView = button.textContent.trim().toUpperCase();

        updateShirtView();
        updatePreviewTitle();

    });

});

// Mengubah warna kedua sisi kaos
shirtColor.addEventListener("input", () => {

    shirtBodyFront.setAttribute("fill", shirtColor.value);
    shirtBodyBack.setAttribute("fill", shirtColor.value);

});

// Memilih ukuran
shirtSize.addEventListener("change", () => {

    updatePreviewTitle();

});

// Tampilan awal
updateShirtView();
updatePreviewTitle();

console.log("T-Shirt Studio berhasil dijalankan!");

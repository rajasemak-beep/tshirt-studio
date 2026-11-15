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
const sizeData = {
    S: {
        chest: 47,
        length: 67,
        shoulder: 42,
        sleeveLength: 19,
        sleeveOpening: 16,
        bottom: 47,
        collar: 18
    },

    M: {
        chest: 49,
        length: 69,
        shoulder: 44,
        sleeveLength: 20,
        sleeveOpening: 17,
        bottom: 49,
        collar: 18.5
    },

    L: {
        chest: 52,
        length: 72,
        shoulder: 46,
        sleeveLength: 21,
        sleeveOpening: 18,
        bottom: 52,
        collar: 19
    },

    XL: {
        chest: 55,
        length: 75,
        shoulder: 48,
        sleeveLength: 22,
        sleeveOpening: 19,
        bottom: 55,
        collar: 19.5
    },

    XXL: {
        chest: 58,
        length: 77,
        shoulder: 50,
        sleeveLength: 23,
        sleeveOpening: 20,
        bottom: 58,
        collar: 20
    }
};

function updateSizeInfo() {
    const selectedSize = shirtSize.value;
    const data = sizeData[selectedSize];

    document.getElementById("infoSize").textContent = selectedSize;
    document.getElementById("infoChest").textContent = data.chest + " cm";
    document.getElementById("infoLength").textContent = data.length + " cm";

    document.getElementById("infoShoulder").textContent = data.shoulder + " cm";
    document.getElementById("infoSleeveLength").textContent = data.sleeveLength + " cm";
    document.getElementById("infoSleeveOpening").textContent = data.sleeveOpening + " cm";
    document.getElementById("infoBottom").textContent = data.bottom + " cm";
    document.getElementById("infoCollar").textContent = data.collar + " cm";
}

shirtSize.addEventListener("change", () => {
    updatePreviewTitle();
    updateSizeInfo();
});

// Tampilan awal
updateShirtView();
updatePreviewTitle();
updateSizeInfo();

console.log("T-Shirt Studio berhasil dijalankan!");

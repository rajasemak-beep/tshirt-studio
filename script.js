// T-SHIRT STUDIO

const viewButtons = document.querySelectorAll(".buttons button");
const previewTitle = document.querySelector(".preview h2");

// Elemen kaos
const shirtBody = document.querySelector(".shirt svg path:first-child");

// Pemilih warna
const shirtColor = document.getElementById("shirtColor");

// Fungsi pergantian tampilan
viewButtons.forEach((button) => {

    button.addEventListener("click", () => {

        viewButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const selectedView = button.textContent.toUpperCase();

        previewTitle.textContent =
            "PREVIEW DESAIN KAOS - " + selectedView;

    });

});

// Fungsi mengubah warna kaos
shirtColor.addEventListener("input", () => {

    shirtBody.setAttribute("fill", shirtColor.value);

});

console.log("T-Shirt Studio berhasil dijalankan!");

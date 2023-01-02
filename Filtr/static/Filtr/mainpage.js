document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, options);
});

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
let fileName = "";

const downloadBtn = document.getElementById("download-btn");
const uploadFile = document.getElementById("upload-file");
const revertBtn = document.getElementById("revert-btn");

const vintage = document.getElementById("vintage");
const lomo = document.getElementById("lomo");
const clarity = document.getElementById("clarity");
const sinCity = document.getElementById("sinCity");
const sunrise = document.getElementById("sunrise");
const crossProcess = document.getElementById("crossProcess");
const orangePeel = document.getElementById("orangePeel");
const love = document.getElementById("love");
const grungy = document.getElementById("grungy");
const jarques = document.getElementById("jarques");
const pinhole = document.getElementById("pinhole");
const oldBoot = document.getElementById("oldBoot");
const greyscale = document.getElementById("greyscale");

const toggleFilters = document.getElementById("toggle-filters");
const toggleTuning = document.getElementById("toggle-tuning");

toggleFilters.addEventListener("click", () => {
    toggle("filters");
});
toggleTuning.addEventListener("click", () => {
    toggle("tuning");
});

filterList = [
    vintage,
    lomo,
    clarity,
    sinCity,
    sunrise,
    crossProcess,
    orangePeel,
    love,
    grungy,
    jarques,
    pinhole,
    oldBoot,
    greyscale,
];

function applyFilter(canvas, filter) {
    Caman(canvas, function () {
        eval("this." + filter + "().render()");
    });
}

vintage.addEventListener("click", function () {
    applyFilter("#canvas", "vintage");
});

lomo.addEventListener("click", (e) => {
    applyFilter("#canvas", "lomo");
});

clarity.addEventListener("click", (e) => {
    applyFilter("#canvas", "clarity");
});

sinCity.addEventListener("click", (e) => {
    applyFilter("#canvas", "sinCity");
});

sunrise.addEventListener("click", (e) => {
    applyFilter("#canvas", "sunrise");
});

crossProcess.addEventListener("click", (e) => {
    applyFilter("#canvas", "crossProcess");
});

orangePeel.addEventListener("click", (e) => {
    applyFilter("#canvas", "orangePeel");
});

love.addEventListener("click", (e) => {
    applyFilter("#canvas", "love");
});

grungy.addEventListener("click", (e) => {
    applyFilter("#canvas", "grungy");
});

jarques.addEventListener("click", (e) => {
    applyFilter("#canvas", "jarques");
});

pinhole.addEventListener("click", (e) => {
    applyFilter("#canvas", "pinhole");
});

oldBoot.addEventListener("click", (e) => {
    applyFilter("#canvas", "oldBoot");
});

greyscale.addEventListener("click", (e) => {
    applyFilter("#canvas", "greyscale");
});

// Filter & Effect Handlers
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
        if (e.target.classList.contains("brightness-add")) {
            Caman("#canvas", img, function () {
                this.brightness(5).render();
            });
        } else if (e.target.classList.contains("brightness-remove")) {
            Caman("#canvas", img, function () {
                this.brightness(-5).render();
            });
        } else if (e.target.classList.contains("contrast-add")) {
            Caman("#canvas", img, function () {
                this.contrast(5).render();
            });
        } else if (e.target.classList.contains("contrast-remove")) {
            Caman("#canvas", img, function () {
                this.contrast(-5).render();
            });
        } else if (e.target.classList.contains("saturation-add")) {
            Caman("#canvas", img, function () {
                this.saturation(5).render();
            });
        } else if (e.target.classList.contains("saturation-remove")) {
            Caman("#canvas", img, function () {
                this.saturation(-5).render();
            });
        } else if (e.target.classList.contains("vibrance-add")) {
            Caman("#canvas", img, function () {
                this.vibrance(5).render();
            });
        } else if (e.target.classList.contains("vibrance-remove")) {
            Caman("#canvas", img, function () {
                this.vibrance(-5).render();
            });
        }
    }
});

// Revert Filters
revertBtn.addEventListener("click", (e) => {
    Caman("#canvas", img, function () {
        this.revert();
    });
});

// Upload File
uploadFile.addEventListener("change", () => {
    const file = document.getElementById("upload-file").files[0];
    const reader = new FileReader();

    if (file) {
        fileName = file.name;
        reader.readAsDataURL(file);
    }

    // Add image to canvas
    reader.addEventListener(
        "load",
        () => {
            img = new Image();
            img.src = reader.result;
            img.onload = function () {
                canvas.style.display = "block";
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0, img.width, img.height);
                canvas.removeAttribute("data-caman-id");
                document.getElementById("filters").style.display = "block";

                for (let i = 0; i < filterList.length; ++i) {
                    filterList[i].width = img.width;
                    filterList[i].height = img.height;
                    filterList[i]
                        .getContext("2d")
                        .drawImage(img, 0, 0, img.width, img.height);
                    filterList[i].removeAttribute("data-caman-id");

                    applyFilter("#" + filterList[i].id, filterList[i].id);
                }
            };
        },
        false
    );
});

// Download Event
downloadBtn.addEventListener("click", () => {
    const fileExtension = fileName.slice(-4);

    let newFilename;

    if (fileExtension === ".jpg" || fileExtension === ".png") {
        newFilename =
            fileName.substring(0, fileName.length - 4) + "-edited.jpg";
    }

    download(canvas, newFilename);
});

// Download
function download(canvas, filename) {
    let e;
    const link = document.createElement("a");

    link.download = filename;
    link.href = canvas.toDataURL("image/jpeg", 0.8);
    e = new MouseEvent("click");
    link.dispatchEvent(e);
}

Caman.Filter.register("greyscale", function () {
    this.process("greyscale", function (rgba) {
        var lumin = 0.2126 * rgba.r + 0.7152 * rgba.g + 0.0722 * rgba.b;
        rgba.r = lumin;
        rgba.g = lumin;
        rgba.b = lumin;
    });
    return this;
});

function toggle(option) {
    const filters = document.getElementById("filters");
    const tuning = document.getElementById("tuning");
    if (option == "tuning") {
        console.log("SDFG");
        tuning.style.display = "block";
        filters.style.display = "none";
    } else {
        console.log("QWERTY");
        tuning.style.display = "none";
        filters.style.display = "block";
    }
}

let modeIcon = document.getElementById("modeIcon");
let localData = localStorage.getItem("theme");

if (localData === null) {
    localStorage.setItem("theme", "light");
} else if (localData === "dark") {
    document.body.classList.add("dark-mode");
    modeIcon.src = "./images/sun.png";
}

modeIcon.onclick = () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        modeIcon.src = "./images/sun.png";
        localStorage.setItem("theme", "dark");
    } else {
        modeIcon.src = "./images/moon.png";
        localStorage.setItem("theme", "light");
    }
};

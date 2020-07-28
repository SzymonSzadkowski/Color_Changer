const bcolor = document.querySelector(".bcolor");
const colorButton = document.querySelector(".changeIt");

colorButton.addEventListener("click", () => {
    var color = prompt("Which color do you want this background to be?");
    if (color.includes(" ")) {
        alert("Please write this color without a space");
        color = prompt("Which color do you want this background to be?");
    }
    bcolor.innerHTML = color;
    document.body.style.backgroundColor = color.toLowerCase();
})
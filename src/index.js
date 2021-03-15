const dropdownItems = document.getElementById("dropdownItems");
const btn = document.getElementById("btn");
let display = true;

btn.addEventListener("click", (e) => {
  console.log(display);
  if (display) {
    dropdownItems.style.display = "block";
    display = !display;
  } else {
    dropdownItems.style.display = "none";
    display = !display;
  }
});

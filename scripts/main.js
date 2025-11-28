const myButton = document.querySelector("button");
const myImage = document.querySelector("img");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Go to hell, ${myName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
  changeImage();
});

function changeImage() {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/skeleton.jpg") {
    myImage.setAttribute("src", "images/go-to-hell.jpg");
  }
}

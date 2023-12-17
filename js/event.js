
import { users } from "./user.js";

let nameBtn = document.getElementById('namebtn');
let emailBtn = document.getElementById('email');
let ageBtn = document.getElementById('age');
let addressBtn = document.getElementById('address');
let phoneBtn = document.getElementById('phone');
let passBtn = document.getElementById('pass');
let mainText = document.getElementById('text1');
let head = document.getElementById('head');
let randomBtn = document.getElementById('random');
let image = document.getElementById('image');

let currentIndex = 0;

nameBtn.addEventListener('click', function () {
    currentIndex++;
    if (currentIndex === users.length) {
        currentIndex = 0;
    }
    updateDisplay();
});

emailBtn.addEventListener('click', function () {
    setDataUser(currentIndex, "email");
});

ageBtn.addEventListener('click', function () {
    setDataUser(currentIndex, "age");
});

addressBtn.addEventListener('click', function () {
    setDataUser(currentIndex, "address");
});

phoneBtn.addEventListener('click', function () {
    setDataUser(currentIndex, "phone");
});

passBtn.addEventListener('click', function () {
    setDataUser(currentIndex, "company");
});

window.addEventListener('load', function () {
    updateDisplay();
});

randomBtn.addEventListener('click', function () {
    currentIndex = Math.floor(Math.random() * users.length);
    updateDisplay();
});

function setDataUser(index, type) {
    let user = users[index];
    if (type === "address") {
        mainText.innerText = `${user[type].street}`;
        head.innerHTML = `My ${type} is`;
    } else if (type === "company") {
        mainText.innerText = `${user[type].password}`;
        head.innerHTML = `My password is`;
    } else {
        mainText.innerHTML = user[type];
        head.innerHTML = `My ${type} is`;
    }
    image.src = user.img;
}

function updateDisplay() {
    let user = users[currentIndex];
    mainText.innerText = user.name;
    head.innerHTML = "My name is";
    image.src = user.img;
}



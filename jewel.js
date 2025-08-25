var box = document.querySelector(".box");
box.addEventListener("click", function () {
    window.location.href = "productview1.html";
});
var box1 = document.querySelector(".box1");
box1.addEventListener("click", function () {
    window.location.href = "productview2.html";
});

var cancelmenu = document.querySelector(".cancel-icon-menu");
var menu = document.querySelector(".menu-container");
var openmenu = document.querySelector(".menu-icon");
var overlay = document.querySelector(".overlay");
var accountbtn = document.querySelector(".acc-btn");
var acc = document.querySelector(".container-acc");
var cancelAcc = document.querySelector(".cancel-icon-acc")
var sign = document.querySelector(".sign");


openmenu.addEventListener("click",() => {
    menu.classList.add('active');
    overlay.classList.add('active');
})

cancelmenu.addEventListener("click",() => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
})
overlay.addEventListener("click",() => {
    menu.classList.remove('active');
    acc.classList.remove('active');
    overlay.classList.remove('active');

})
accountbtn.addEventListener("click",() => {
    acc.classList.add('active');
    overlay.classList.add('active');
})
sign.addEventListener("click",() => {
    acc.classList.add('active');
    overlay.classList.add('active');
})
cancelAcc.addEventListener("click",() => {
    acc.classList.remove('active');
    overlay.classList.remove('active');
})

const menuIcon=document.querySelector(".menu-icon");
const menuCrossIcon=document.querySelector(".menu-cross-icon");
const mobileMenuPage=document.querySelector(".mobile-menu-page");
//Function for click on the Menu Icon
menuIcon.addEventListener('click',()=>{
    mobileMenuPage.classList.add("active");
    menuCrossIcon.classList.add("active");
});
//Function for click on the Menu Close Icon
menuCrossIcon.addEventListener('click',()=>{
    mobileMenuPage.classList.remove("active");
    menuCrossIcon.classList.remove("active");
});





 
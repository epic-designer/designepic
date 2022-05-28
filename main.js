// Responsive Navbar Component
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

// mobile_nav.addEventListener('click', () => {
//     headerElem.classList.toggle("active");
// });
const toggleNavBar = () => {
    headerElem.classList.toggle("active")
};
mobile_nav.addEventListener('click', () => toggleNavBar() );
// Responsive Navbar Component



const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    // console.log(p_btn_clicked); //!Remove it

    p_btn.forEach((curElem) => {
        curElem.classList.remove("p-btn-active")
    });
    p_btn_clicked.classList.add("p-btn-active");

    const btn_num = p_btn_clicked.dataset.btnNum;
    // console.log(btn_num);  //!Remove it

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem) => {
        curElem.classList.add("p-image-not-active")
    });
    img_active.forEach((curElem) => {
        curElem.classList.remove("p-image-not-active");
    });
    
});
//? scorll to top button

const sectionHero = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");

const scrolltoTop = document.createElement("div");
scrolltoTop.classList.add("scroll-Top-style");
scrolltoTop.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`
footerElem.after(scrolltoTop);

const scrollTop = () => {
    sectionHero.scrollIntoView({ behavior: "smooth" });
};

document.querySelector(".scroll-top").addEventListener("click", scrollTop);

// Amimate Number increment
const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 20;
counterNum.forEach((curElen) => {
    const updateNumber = () => {
        const targetNumber = parseInt(curElen.dataset.number);
        // console.log(targetNumber);
        const InitNum = parseInt(curElen.innerText);
        // console.log(InitNum);
        const IncrementNumber = Math.trunc(targetNumber/speed);
        // console.log(IncrementNumber);

        if(InitNum<targetNumber){
            curElen.innerText = `${InitNum + IncrementNumber}+`;
            setTimeout(updateNumber, 50)
        }
    };
    updateNumber();
});
// Amimate Number increment



const menu = document.querySelector('header');


// console.log(html);


function mudarHeader(event) {
    if (scrollY > 0) {
        menu.style.background = "#371870";
    }
    else {
        menu.style.background = "#5F3CA1";
    }

}
window.addEventListener("scroll", mudarHeader);

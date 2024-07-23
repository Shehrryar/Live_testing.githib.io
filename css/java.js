const row = document.querySelector('.row_posters');
const buttons = document.querySelectorAll('.row_posters button');
let currentIndex = 0;

function upDate(slider) {
    const previewPic = buttons[currentIndex].querySelector('img');
    document.getElementById('image').innerHTML = ".";
    document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";
    buttons.forEach((button, index) => {
        if (index === currentIndex) {
            button.style.backgroundPosition = "-100% 0";
            button.classList.add('active');
        } else {
            button.style.backgroundPosition = "0 0";
            button.classList.remove('active');
        }
    });
    currentIndex = (currentIndex + 1) % buttons.length;
    setTimeout(() => upDate(slider), 3000);
}
upDate();

let slide = document.getElementById("row2")
let xcordinate0=0
let btnright0 = document.getElementById("btnr0")
let btnleft0 = document.getElementById("btnl0")
btnright0.addEventListener("click", () =>{
    xcordinate0+=250
  slide.scroll(xcordinate0,0)
  } )
  btnleft0.addEventListener("click", () =>{
    xcordinate0+=-250
  slide.scroll(xcordinate0,0)
  } )

 
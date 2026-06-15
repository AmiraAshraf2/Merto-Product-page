//display
const imagesDiv = document.getElementById("imgs")
const bigImg = document.getElementById("bigimg")



imagesDiv.addEventListener('click',(e)=>{
    if(e.target.classList.contains("img1")){
        bigImg.src = "images/electronic-14-2.jpg";
    }

    if(e.target.classList.contains("img2")){
        bigImg.src = "images/electronic-14.jpg";
    }

    if(e.target.classList.contains("img3")){
        bigImg.src = "images/electronic-15-2.jpg";
    }

    if(e.target.classList.contains("img4")){
        bigImg.src = "images/electronic-16.jpg";
    }

    for (let child of imagesDiv.children) {
  child.classList.remove("border-2","border-dark")
}
    e.target.classList.add("border-2","border-dark")

})

//Zoom
$(document).ready(function () {
            $('#bigimg-container').zoom();
        });

// product count

const productNum = document.getElementById('product-numer');
const increaseBtn = document.getElementById('up');
const decreaseBtn = document.getElementById('down');

increaseBtn.addEventListener('click', () => {
    productNum.innerHTML = Number(productNum.innerHTML) + 1;
});


decreaseBtn.addEventListener('click', () => {
    let current = Number(productNum.innerHTML);

    if (current > 1) {
        productNum.innerHTML = current - 1;
    }
});


// Timer

let dayElement = document.getElementById("days");
let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");

let second = Number(secondsElement.innerText);
let minute = Number(minutesElement.innerText);
let hour = Number(hoursElement.innerText);

let day = Number(dayElement.innerText);

let time = setInterval(updateTimer, 1000)

function updateTimer(){
    if (day === 0 && hour === 0 && minute === 0 && second === 0) {
        clearInterval(time);
        return;
    }
    if (second > 0) {
        second--;
    } else {
        second = 59;

        if (minute > 0) {
            minute--;
        } else {
            minute = 59;

            if (hour > 0) {
                hour--;
            } else {
                hour = 23;

                if (day > 0) {
                    day--;
                }
            }
        }
    }

    dayElement.innerText = day
    hoursElement.innerText = hour
    minutesElement.innerText = minute
    secondsElement.innerText = second
}

//
const swiper = new Swiper(".productSwiper", {

    loop: true,

    spaceBetween: 20,

    speed: 800,

    slidesPerView: 5,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
  },

});
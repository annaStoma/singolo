// navigation active
const NAVIGATION = document.getElementById('navigation');
const HOME_SECTION = document.getElementById('header');
const SERVICES_SECTION = document.getElementById('services');
const PORTFOLIO_SECTION = document.getElementById('portfolio');
const ABOUT_SECTION = document.getElementById('about');
const CONTACTS_SECTION = document.getElementById('contact');

const removeLinkActive = () => {
    NAVIGATION.querySelectorAll('span').forEach(item => {
        item.classList.remove('link-active');
    });
}

NAVIGATION.addEventListener('click', (event) => {
    if (event.target.tagName == 'SPAN') {
        removeLinkActive();
        event.target.classList.add('link-active');
    }
})

// anchors scroll
const ANCHORS = document.querySelectorAll('a[href*="#"]')

for (let anchor of ANCHORS) {
    anchor.addEventListener('click', event => {
        event.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// change active link with scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY < SERVICES_SECTION.offsetTop - HOME_SECTION.offsetHeight) {
        removeLinkActive();
        document.getElementById('home_link').classList.add('link-active');
        HOME_SECTION.style.opacity = "1";
        HOME_SECTION.style.height = '89px';
    }
    if (window.scrollY >= SERVICES_SECTION.offsetTop - HOME_SECTION.offsetHeight && window.scrollY < PORTFOLIO_SECTION.offsetTop - HOME_SECTION.offsetHeight) {
        removeLinkActive();
        document.getElementById('services_link').classList.add('link-active');
        HOME_SECTION.style.opacity = "0.7";
        HOME_SECTION.style.height = '50px';
        HOME_SECTION.style.transition = '0.3s';
    }
    if (window.scrollY >= PORTFOLIO_SECTION.offsetTop - HOME_SECTION.offsetHeight) {
        removeLinkActive();
        document.getElementById('portfolio_link').classList.add('link-active');
    }
    if (window.scrollY >= ABOUT_SECTION.offsetTop - HOME_SECTION.offsetHeight) {
        removeLinkActive();
        document.getElementById('about_link').classList.add('link-active');
    }
    if (window.scrollY >= CONTACTS_SECTION.offsetTop - HOME_SECTION.offsetHeight) {
        removeLinkActive();
        document.getElementById('contact_link').classList.add('link-active');
    }
    if (window.scrollY + 1 >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
        removeLinkActive();
        document.getElementById('contact_link').classList.add('link-active');
    }
});

// slider
const SLIDES = document.querySelectorAll('.slide');
let slider = [];
for (let i = 0; i < SLIDES.length; i++) {
    slider[i] = SLIDES[i].src;
    SLIDES[i].remove();
}
let step = 0;
let offset = 0;
const SLIDE_WIDTH = 1020;
const draw = () => {
    let img = document.createElement('img');
    img.src = slider[step];
    img.classList.add('slide');
    img.style.left = offset * SLIDE_WIDTH + 'px';
    document.querySelector('#slides').appendChild(img);
    if (step == slider.length - 1) step = 0;
    else step++;
    offset = 1;
}
draw();
draw();

const PHONE_WALLPAPER_ONE = document.getElementById('black-screen-one');
const PHONE_WALLPAPER_TWO = document.getElementById('black-screen-two');
const PHONE_BUTTON__ONE = document.getElementById("button-one");
const PHONE_BUTTON__TWO = document.getElementById("button-two");
const SLIDER__SECTION = document.getElementById("slider-section");


const left = () => {
    document.onclick = null;
    const SLIDES_2 = document.querySelectorAll('.slide');
    console.log(SLIDES_2)
    let offset_2 = 0;
    for (let i = 0; i < SLIDES_2.length; i++) {

        SLIDES_2[i].style.left = offset_2 * SLIDE_WIDTH - SLIDE_WIDTH + 'px';
        offset_2++;
        if (SLIDES_2[i].src !== "http://127.0.0.1:5500/assets/img/Slide-1.png") {
            PHONE_WALLPAPER_ONE.style.opacity = "0";
            PHONE_WALLPAPER_TWO.style.opacity = "0";
            PHONE_BUTTON__ONE.style.pointerEvents = "none";
            PHONE_BUTTON__TWO.style.pointerEvents = "none";
            SLIDER__SECTION.style.backgroundColor = "#648bf0"
            SLIDER__SECTION.style.borderBottomColor = "#456bcc"
        } else {
            PHONE_BUTTON__ONE.style.pointerEvents = "auto";
            PHONE_BUTTON__TWO.style.pointerEvents = "auto";
            SLIDER__SECTION.style.backgroundColor = "#f06c64";
            SLIDER__SECTION.style.borderBottomColor = "#ea676b"
        }
    }
    setTimeout(() => {
        SLIDES_2[0].remove();
        draw();

    }, 1000)
}

// lock phone

const delWallpaperOne = () => {
    PHONE_WALLPAPER_ONE.style.opacity = "1";
    if (PHONE_WALLPAPER_ONE.classList.contains('none'))
        PHONE_WALLPAPER_ONE.classList.remove('none')
    else
        PHONE_WALLPAPER_ONE.classList.add('none');
}
const delWallpaperTwo = () => {
    PHONE_WALLPAPER_TWO.style.opacity = "1";
    if (PHONE_WALLPAPER_TWO.classList.contains('none'))
        PHONE_WALLPAPER_TWO.classList.remove('none')
    else
        PHONE_WALLPAPER_TWO.classList.add('none');
}

// portfolio navigation
NAVIGATION.addEventListener('click', (event) => {
    NAVIGATION.querySelectorAll('a').forEach(item => {
        item.classList.remove('link-active');
    });
    event.target.classList.add('link-active');
})

// portfolio random image
const PORTFOLIO_BUTTONS = document.getElementById('portfolio__buttons');
const PORTFOLIO_IMAGES = document.getElementById('portfolio__images');

const randomImages = (event) => {
    let target = event.target;
    if (target.tagName == 'SPAN') {

        PORTFOLIO_BUTTONS.querySelectorAll('span').forEach(item => {
            item.classList.remove('button-active');
        });
        target.classList.add('button-active');

        let srcArray = [];
        let counter = 0;
        PORTFOLIO_IMAGES.querySelectorAll('img').forEach(item => {
            srcArray.push(item.src);
            counter++;
            item.src = '';
        })

        function random(size) {
            let array = new Array(size).fill(0).map((item, i) => i);
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * i);
                let tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
            return array;
        }
        let randArray = random(counter);
        console.log(randArray)
        PORTFOLIO_IMAGES.querySelectorAll('img').forEach((item, index) => {
            item.src = srcArray[randArray[index]];
            item.style.boxShadow = "none";
        })
    }
}

// portfolio active image
PORTFOLIO_IMAGES.addEventListener('click', event => {
    let target = event.target;
    if (target.tagName == 'IMG') {
        PORTFOLIO_IMAGES.querySelectorAll('img').forEach(item => {
            item.style.boxShadow = "none";
        });
        event.target.style.boxShadow = "0px 0px 0px 5px #F06C64";
    }

})

//modal window
const MODAL_WINDOW = document.getElementById('modal-window');
const MODAL_BUTTON = document.getElementById('modal-button');
const MODAL_SUBMIT = document.getElementById('modal-submit');

const FORM = document.getElementById('form');
const NAME_INPUT = document.getElementById('name');
const EMAIL_INPUT = document.getElementById('email');
const TEXT_INPUT = document.getElementById('text');
const DESCR_INPUT = document.getElementById('descr');

const closeModal = (event) => {
    if (event.target.tagName == "SECTION" || event.target.tagName == "BUTTON") {
        MODAL_WINDOW.classList.add('display-none');
        MODAL_SUBMIT.querySelectorAll(".added").forEach(item => {
            MODAL_SUBMIT.removeChild(item);
        })
        FORM.reset();
    }
}

FORM.addEventListener('submit', event => {
    if (event.keyCode == 13) {
        event.preventDefault();
    }
    event.preventDefault();
    if (NAME_INPUT.checkValidity() && EMAIL_INPUT.checkValidity()) {
        MODAL_SUBMIT.innerHTML += "<div class='added'>The letter was sent</div>";
        if (TEXT_INPUT.value.length == 0)
            MODAL_SUBMIT.innerHTML += "<div class='added'>Without subject</div>";
        else {
            let VALUE = TEXT_INPUT.value.split('').map(item => { if (item == '<') item = '&lt;'; if (item == '>') item = '&gt;'; return item }).join('');
            MODAL_SUBMIT.innerHTML += `<div class='added'>Subject:<span class='bold'> ${VALUE} </span></div>`;
        }
        if (DESCR_INPUT.value.length == 0)
            MODAL_SUBMIT.innerHTML += "<div class='added'>Without description</div>";
        else {
            let VALUE = DESCR_INPUT.value.split('').map(item => { if (item == '<') item = '&lt;'; if (item == '>') item = '&gt;'; return item }).join('');
            MODAL_SUBMIT.innerHTML += `<div class='added'>Description:<span class='bold'> ${VALUE} </span></div>`;
        }
        MODAL_SUBMIT.innerHTML += `<div style="text-align: center;" class="modal-button added" id='modal-button'><button>ok</button></div>`;
        MODAL_WINDOW.classList.remove('display-none');
    }
})

FORM.addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
    }
});
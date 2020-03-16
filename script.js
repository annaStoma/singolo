// navigation active
const NAVIGATION = document.getElementById('navigation');

NAVIGATION.addEventListener('click', (event) => {
    if (event.target.tagName == 'SPAN') {
        NAVIGATION.querySelectorAll('span').forEach(item => {
            item.classList.remove('link-active');
        });
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

// slider
const SLIDES = document.querySelectorAll('#slides .slide');
const SLIDER_SECTION = document.getElementById('slider-section');
const SLIDER_ARROW = document.getElementsByClassName('slider__arrow');
var currentSlide = 0;

const slider = () => {
    SLIDES[currentSlide].className += 'slide';
    currentSlide = (currentSlide + 1) % SLIDES.length;
    if (SLIDES[currentSlide].classList.contains('blue')) {
        SLIDER_SECTION.style.backgroundColor = '#648bf0';
        SLIDER_SECTION.style.borderBottomColor = '#5173cb';
        SLIDES[currentSlide].className += ' showing';
    } else {
        // SLIDER_SECTION.style.transition = 'ease-out 0.2s';;
        SLIDER_SECTION.style.backgroundColor = '#f06c64';
        SLIDER_SECTION.style.borderBottomColor = '#ea676b';
        SLIDES[currentSlide].className += ' showing';
    }
}

// lock phone
const PHONE_WALLPAPER_ONE = document.getElementById('slider__img-one');
const PHONE_WALLPAPER_TWO = document.getElementById('slider__img-two');
const delWallpaperOne = () => {
    if (PHONE_WALLPAPER_ONE.classList.contains('none'))
        PHONE_WALLPAPER_ONE.classList.remove('none')
    else
        PHONE_WALLPAPER_ONE.classList.add('none');
}
const delWallpaperTwo = () => {
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
        else
            MODAL_SUBMIT.innerHTML += `<div class='added'>Subject:<span class='bold'> ${TEXT_INPUT.value}</span></div>`;
        if (DESCR_INPUT.value.length == 0)
            MODAL_SUBMIT.innerHTML += "<div class='added'>Without description</div>";
        else
            MODAL_SUBMIT.innerHTML += `<div class='added'>Description:<span class='bold'> ${DESCR_INPUT.value}</span></div>`;
        MODAL_SUBMIT.innerHTML += `<div style="text-align: center;" class="modal-button added" id='modal-button'><button>ok</button></div>`;
        MODAL_WINDOW.classList.remove('display-none');
    }
})

FORM.addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
    }
});
// navigation active
const NAVIGATION = document.getElementById('navigation');

NAVIGATION.addEventListener('click', (event) => {
    NAVIGATION.querySelectorAll('a').forEach(item => {
        item.classList.remove('link-active');
    });
    event.target.classList.add('link-active');
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
const PHONE_WALLPAPER = document.getElementsByClassName('slider__img');
const delWallpapaer = () => {
    let elem = this.event.target;
    if (elem.classList.contains('none'))
        elem.classList.remove('none')
    else
        elem.classList.add('none');
}

// portfolia navigation
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
        PORTFOLIO_IMAGES.querySelectorAll('img').forEach(item => {
            srcArray.push(item.src);
            item.src = '';
        })

        let randArray = srcArray.sort(function() {
            return Math.random() - 0.5;
        });

        PORTFOLIO_IMAGES.querySelectorAll('img').forEach((item, index) => {
            item.src = randArray[index];
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
        event.target.style.boxShadow = "0px 0px 0px 2px rgba(255,0,0,1)";
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
        let added = document.getElementById('added');
        MODAL_SUBMIT.removeChild(added);
        FORM.reset();
    }
}

const getLetter = () => {
    if (NAME_INPUT.checkValidity() && EMAIL_INPUT.checkValidity() && TEXT_INPUT.value.length > 0 && DESCR_INPUT.value.length > 0) {
        MODAL_SUBMIT.innerHTML += "<div id='added'>Верно</div>";
        MODAL_WINDOW.classList.remove('display-none');
    } else if (NAME_INPUT.value.length == 0 || EMAIL_INPUT.value.length == 0) {
        MODAL_SUBMIT.innerHTML += "<div id='added'>Обязательные поля должны быть заполнены</div>";
        MODAL_WINDOW.classList.remove('display-none');

    } else if (!NAME_INPUT.checkValidity()) {
        MODAL_SUBMIT.innerHTML += "<div id='added'>имя введено некоректно</div>";
        MODAL_WINDOW.classList.remove('display-none');

    } else if (!EMAIL_INPUT.checkValidity()) {
        MODAL_SUBMIT.innerHTML += "<div id='added'>емайл введен некоректно</div>";
        MODAL_WINDOW.classList.remove('display-none');

    } else if (TEXT_INPUT.value.length == 0 && DESCR_INPUT.value.length == 0) {
        MODAL_SUBMIT.innerHTML += "<div id='added'>Заполните либо оба, либо одно из оставшихся полей</div>";
        MODAL_WINDOW.classList.remove('display-none');

    } else if (TEXT_INPUT.value.length == 0 && DESCR_INPUT.value.length == 0) {
        MODAL_SUBMIT.innerHTML += "<div id='added'>Без темы и без описания</div>";
        MODAL_WINDOW.classList.remove('display-none');

    } else if (TEXT_INPUT.value.length == 0) {
        MODAL_SUBMIT.innerHTML += "<div id='added'>Без темы</div>";
        MODAL_WINDOW.classList.remove('display-none');

    } else if (TEXT_INPUT.value == 'Singolo') {
        MODAL_SUBMIT.innerHTML += "<div id='added'>Тема: Singolo</div>";
        MODAL_WINDOW.classList.remove('display-none');

    } else if (DESCR_INPUT.value.length == 0) {
        MODAL_SUBMIT.innerHTML += "<div id='added'>Без описания</div>";
        MODAL_WINDOW.classList.remove('display-none');

    } else if (DESCR_INPUT.value == 'Portfolio project') {
        MODAL_SUBMIT.innerHTML += "<div id='added'>Тема: Portfolio project</div>";
        MODAL_WINDOW.classList.remove('display-none');
    }
}
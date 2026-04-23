// CHANGE THEME
let background = document.querySelector(".left");
let rusSwitch = document.querySelector(".rus-switch")
let engSwitch = document.querySelector(".eng-switch")
let modalWindow = document.querySelector(".modal-content")
let exit = document.querySelector(".x")
let closeErrorSymbol = document.querySelector(".error-x")
let container = document.querySelector(".container")
let manualCopyMobile = document.querySelector('.manual-copy-mobile');
let mobileModalError = document.querySelector('.modal2');
let creatorName = document.querySelector('.footer-portrait .bottom_text1');
let goodWish = document.querySelector('.footer-portrait .bottom_text2');
let opt1 = document.getElementById('opt-1');
let opt2 = document.getElementById('opt-2');
let opt3 = document.getElementById('opt-3');

const headTag = document.getElementsByTagName('head')[0];

const styleTag = document.createElement("style");

function switchtoDarkTheme() {
  headTag.appendChild(styleTag);
  styleTag.innerHTML = `
  :root {
    /* COLOR */
    --BGCOLOR:#222;
    --FFCOLOR: #f4faff;
    --ACCENTCOLOR: #e96aa1;
    --DARKERCOLOR:  #f4faff;
    --NAMECOLOR:  #f4faff;
    --PINKCHANGE: sepia(100%) hue-rotate(-75deg) brightness(295%) contrast(160%) saturate(200%);
    --INVERTFILTER: invert(100%) brightness(150%);
    --CAROUSELBG:#222;
    --BUTTONBGCOLOR: #333;
    --BUTTONCOLOR: #f4faff;
    --SEMITRANSPARENT: rgba(20, 20, 20, 0.85);
    --LIGHTSWITCHWEIGHT: light;
    --LIGHTSWITCHHOVER: underline;
    --LIGHTSWITCHHOVERCOLOR: var(--ACCENTCOLOR);
    --LIGHTSWITCHDECO: underline;
    --DARKSWITCHWEIGHT: bolder;
    --DARKSWITCHHOVER: none;
    --DARKSWITCHHOVERCOLOR: var(--FFCOLOR);
    --DARKSWITCHDECO: none;
  
    /* || FONTS */
    --FF-NAME: "Oswald", sans-serif;
    --FF-MAIN: "Manrope", sans-serif;
  }`
}

function switchtoLightTheme() {
  headTag.appendChild(styleTag);
  styleTag.innerHTML = `
  :root {
      /* COLOR */
      --BGCOLOR:#f4faff;
      --FFCOLOR: #222;
      --ACCENTCOLOR: #ff64a7;
      --DARKERCOLOR: #222;
      --NAMECOLOR: #333;
      --PINKCHANGE: sepia(100%) hue-rotate(-70deg) brightness(320%) contrast(145%)saturate(415%);
      --INVERTFILTER: invert(0);
      --CAROUSELBG:#fcfcfc;
      --BUTTONBGCOLOR: #333;
      --BUTTONCOLOR: #f4faff;
      --SEMITRANSPARENT: rgba(255, 255, 255, 0.85);
      --LIGHTSWITCHWEIGHT: bolder;
      --LIGHTSWITCHHOVER: none;
      --LIGHTSWITCHHOVERCOLOR: var(--FFCOLOR);
      --LIGHTSWITCHDECO: none;
      --LIGHTSWITCHCURSOR:url(/assets/pointer48s.png);
      --DARKSWITCHWEIGHT: light;
      --DARKSWITCHHOVER: underline;
      --DARKSWITCHHOVERCOLOR: var(--ACCENTCOLOR);
      --DARKSWITCHDECO: underline;
      --DARKSWITCHCURSOR:url(/assets/starcur48.png);
  
      /* || FONTS */
      --FF-NAME: "Oswald", sans-serif;
      --FF-MAIN: "Manrope", sans-serif;
  }`;
}

// SCROLLER ANIMATION
let startBtn = document.getElementById('start');

let rightSide = document.querySelector(".right");
rightSide.addEventListener("click", clickElsewhere);

let scrollerUp = document.getElementById("Up");
let scrollerMiddle = document.getElementById("Middle");
let scrollerDown = document.getElementById("Down");

let scrollerInner1 = document.getElementById("First");
let scrollerInner2 = document.getElementById("Second");
let scrollerInner3 = document.getElementById("Third");



let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let img7 = document.getElementById("img7");
let img8 = document.getElementById("img8");
let img9 = document.getElementById("img9");
let img10 = document.getElementById("img10");
let img11 = document.getElementById("img11");
let img12 = document.getElementById("img12");

// Adding blending mode to everything but the element the mouse is on
const artworks = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

artworks.forEach(changeColor);

function changeColor(artwork) {
  rightSide.addEventListener("mouseover", function() {artwork.classList.add('change-color')});
  artwork.onmouseenter = function() {
  artwork.classList.remove('change-color');
  };
  artwork.setAttribute("oncontextmenu", "return false")
  rightSide.addEventListener("mouseout", function() {artwork.classList.remove('change-color')});
};

rightSide.addEventListener("click", clickElsewhere);
rightSide.addEventListener("mouseover", clickElsewhere);
rightSide.addEventListener("mouseenter", clickElsewhere);
rightSide.addEventListener("mouseout", clickElsewhere);

// Create a MediaQueryList object
const mmObj = window.matchMedia("(min-aspect-ratio: 0.6) and (max-aspect-ratio: 1)");

const scrollers = [scrollerInner1, scrollerInner2, scrollerInner3]

function addAnimation() {
  scrollerInner1.style.animation="scroll 8s infinite linear forwards";
  scrollerInner2.style.animation="scroll 8s infinite linear reverse";
  scrollerInner3.style.animation="scroll 8s infinite linear forwards";
  scrollerInner1.addEventListener('animationstart', function() { scrollerInner1.append(scrollerInner1.firstChild); });
  scrollerInner1.addEventListener('animationiteration', function() { scrollerInner1.append(scrollerInner1.firstElementChild); });

  scrollerInner2.addEventListener('animationstart', function() { scrollerInner2.prepend(scrollerInner2.lastChild); });
  scrollerInner2.addEventListener('animationiteration', function() { scrollerInner2.prepend(scrollerInner2.lastElementChild); });

  scrollerInner3.addEventListener('animationstart', function() { scrollerInner3.append(scrollerInner3.firstChild); });
  scrollerInner3.addEventListener('animationiteration', function() { scrollerInner3.append(scrollerInner3.firstElementChild); });
};

// Add the match function as a listener for state changes
mmObj.addEventListener("change", function() {
  removeLastRow(mmObj);
  location.reload();
  if (scrollerInner1.children.length == 6) {
    scrollerInner1.style.animationName = "scroll1";
    scrollerInner2.style.animationName = "scroll1";
    scrollerInner3.style.animationName = "scroll1";
    scrollerInner1.style.animationDuration = "10s";
    scrollerInner2.style.animationDuration = "10s";
    scrollerInner3.style.animationDuration = "10s";
  } else {
    scrollerInner1.style.animationName = "scroll";
    scrollerInner2.style.animationName = "scroll";
    scrollerInner3.style.animationName = "scroll";
    scrollerInner1.style.animationDuration = "8s";
    scrollerInner2.style.animationDuration = "8s";
    scrollerInner3.style.animationDuration = "8s";
  }
});

function removeLastRow(x) {
  if (x.matches) {
    scrollerDown.style.display = "none";
    scrollerInner1.append(img12, img10);
    scrollerInner2.append(img9, img11);
  } else {
    scrollerDown.style.display = "flex";
    scrollerInner3.append(img9, img10, img11, img12);
}};

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
  window.addEventListener("resize", addAnimation);
} else if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
rightSide.innerHTML = `       
        <img class="scroller-img normal cursor1" onmouseover="artwork.forEach(blendingMode)" onmouseenter="this.classList.remove('change-color')" onmouseout="artwork.forEach(normalBlending)" src="/assets/thumbnails 540/thumb_1.png" alt="" width="320" height="320" onclick="openImgWindow('thumb1')"/>
        
        <img class="scroller-img normal cursor2" src="/assets/thumbnails 540/thumb_2.png" alt="" width="320" height="320" onmouseover="artwork.forEach(blendingMode)" onmouseenter="this.classList.remove('change-color')" onmouseout="artwork.forEach(normalBlending)" onclick="openImgWindow('thumb2')"/>
        
        <img class="scroller-img normal cursor1" src="/assets/thumbnails 540/thumb_3.png" onmouseover="artwork.forEach(blendingMode)" onmouseenter="this.classList.remove('change-color')" onmouseout="artwork.forEach(normalBlending)" alt="" width="320" height="320" onclick="openImgWindow('thumb3')"/>
        
        <img class="scroller-img normal cursor2" src="/assets/thumbnails 540/thumb_4.png" onmouseover="artwork.forEach(blendingMode)" onmouseenter="this.classList.remove('change-color')" onmouseout="artwork.forEach(normalBlending)" alt="" width="320" height="320" onclick="openImgWindow('thumb4')"/>
        
        <img class="scroller-img cursor2" src="/assets/thumbnails 540/thumb_5.png" onmouseover="artwork.forEach(blendingMode)" onmouseenter="this.classList.remove('change-color')" onmouseout="artwork.forEach(normalBlending)" alt="" width="320" height="320" onclick="openImgWindow('thumb5')"/>
        
        <img class="scroller-img cursor1" src="/assets/thumbnails 540/thumb_6.png" onmouseover="artwork.forEach(blendingMode)" onmouseenter="this.classList.remove('change-color')" onmouseout="artwork.forEach(normalBlending)" alt="" width="320" height="320" onclick="openImgWindow('thumb6')"/>
        
        <img class="scroller-img cursor2" src="/assets/thumbnails 540/thumb_7.png" onmouseover="artwork.forEach(blendingMode)" onmouseenter="this.classList.remove('change-color')" onmouseout="artwork.forEach(normalBlending)" alt="" width="320" height="320" onclick="openImgWindow('thumb7')"/>
        
        <img class="scroller-img cursor1" src="/assets/thumbnails 540/thumb_8.png" onmouseover="artwork.forEach(blendingMode)" onmouseenter="this.classList.remove('change-color')" onmouseout="artwork.forEach(normalBlending)" alt="" width="320" height="320" onclick="openImgWindow('thumb8')"/>
        
        <img class="scroller-img cursor1" src="/assets/thumbnails 540/thumb_9.png" onmouseover="artwork.forEach(blendingMode)" onmouseenter="this.classList.remove('change-color')" onmouseout="artwork.forEach(normalBlending)" alt="" width="320" height="320" onclick="openImgWindow('thumb9')"/>
        
        <img class="scroller-img cursor2" src="/assets/thumbnails 540/thumb_10.png" onmouseover="artwork.forEach(blendingMode)" onmouseenter="this.classList.remove('change-color')" onmouseout="artwork.forEach(normalBlending)" alt="" width="320" height="320" onclick="openImgWindow('thumb10')"/>
        
        <img class="scroller-img cursor1" src="/assets/thumbnails 540/thumb_11.png" onmouseover="artwork.forEach(blendingMode)" onmouseenter="this.classList.remove('change-color')" onmouseout="artwork.forEach(normalBlending)" alt="" width="320" height="320" onclick="openImgWindow('thumb11')"/>
        
        <img class="scroller-img cursor2" src="/assets/thumbnails 540/thumb_12.png" onmouseover="artwork.forEach(blendingMode)" onmouseenter="this.classList.remove('change-color')" onmouseout="artwork.forEach(normalBlending)" alt="" width="320" height="320" onclick="openImgWindow('thumb12')"/>
`};

// IMAGE WINDOW
let modal = document.getElementById('id01');
let carousel = document.querySelector('.carousel');
let imgContainer = document.querySelector('.modal-left');
let slideIndex = 1;

showDivs(slideIndex);

let footerP = document.querySelector('.footer-portrait');

function changeSize(artwork) {
  if (scrollerInner1.children.length === 6 && footerP.style.visibility === "hidden") {
  artwork.classList.add('tworows');
  }
}
artworks.forEach(changeSize);

function plusDivs(n) {
  showDivs(slideIndex += n);
  animationVideo.load();
}

function currentDiv(n) {
  showDivs(slideIndex = n);
  if (slideIndex = 4) {
    animationVideo.load();
  }
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("change-img");
  let dots = document.getElementsByClassName("dots");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-pink", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " dot-pink";
}

let img01 = document.querySelector('.change-img');
let img02 = document.querySelector('.change-img2');
let img03 = document.querySelector('.change-img3');
carousel = [img01, img02, img03];

function reset() {
  showDivs(slideIndex = 1);
};

let imgDesc = document.querySelector('.img-description');
let usedSoftware = document.querySelector('.tools');
let headerText = document.querySelector('.modal-header-text');
let animationVideo = document.querySelector ("video");
let descHeader = document.querySelector(".desc");
let softHeader = document.querySelector(".software");
let aboutMe = document.querySelector(".about");
let portfolio = document.querySelector("h1");
let lightSwitch = document.querySelector(".light");
let darkSwitch = document.querySelector(".dark");
let tooltipText = document.querySelector('.result');
let wish = document.querySelector(".bottom_text2 p");
let errorHeader = document.querySelector(".error-header h3");
let errorBody = document.querySelector(".error-body p");

if (navigator.language === "en" || navigator.language === "en-US") {
  ruLocalization();
} else {
  enLocalization();
}

rusSwitch.addEventListener("click", ruLocalization);
engSwitch.addEventListener("click", enLocalization);

function ruLocalization() {
  engSwitch.classList.remove("activelang");
  rusSwitch.classList.add("activelang");
  rusSwitch.innerText = 'рус';
  engSwitch.innerText = 'eng';
  portfolio.innerText = 'портфолио';
  lightSwitch.innerText = 'свет';
  darkSwitch.innerText = 'тьма';
  tooltipText.innerText = 'Скопирован!';
  creatorName.innerText = "© 2026 Натуситерум";
  goodWish.innerText = "Желаю прекрасного дня!";
  wish.innerText = 'Желаю прекрасного дня!';
  errorHeader.innerText = 'Ошибка';
  errorBody.innerText = `Прошу прощения за принесённые неудобства! 
  Пожалуйста, скопируйте вручную:`
  aboutMe.innerText = `Привет-привет! Меня зовут Софи Натуситерум.
  Я 3D дизайнер и аниматор из  Санкт-Петербурга. 
  Для создания своих работ я использую Blender. 
  Мне нравится создавать яркие работы, которые привлекают внимание. 
  Я буду очень рада сотрудничеству!
  
  Контакты для связи со мной:`;
}

function enLocalization() {
  engSwitch.classList.add("activelang");
  rusSwitch.classList.remove("activelang");
  rusSwitch.innerText = 'рус';
  engSwitch.innerText = 'eng';
  portfolio.innerText = 'portfolio';
  lightSwitch.innerText = 'light';
  darkSwitch.innerText = 'dark';
  tooltipText.innerText = 'Copied!';
  creatorName.innerText = "© 2026 by Natusiterum";
  goodWish.innerText = "Wish you a wonderful day!";
  wish.innerText = 'Wish you a wonderful day!';
  errorHeader.innerText = 'Error';
  errorBody.innerText = `Sorry for the inconvenience! Please copy manually:`
  aboutMe.innerText = `Hello! I'm a 3D designer and animator, currently based in St. Petersburg, Russia. Blender is my 3D software of choice. With its help I create bright and fun works which captivate people's attention. I'd love to work with you and bring your ideas to reality! 
  
  You can contact me via:`;
}

console.log(navigator.language === "en" || navigator.language === "en-US" )

let descAliceRu = `Анимация, посвящённая сказке «Приключения Алисы в Стране чудес» Льюиса Кэрролла. Для создания анимации было выделено несколько важных моментов сюжета, а также были смоделированы объекты, отсылающие к ним. Для большей части моделей были использованы шейдеры, имитирующие штриховку тушью. В дополнение к этому был использован и стилизован модификаторами grease pencil для cоздания контура.`;

let descAliceEng = `This animation is based on Alice's Adventures in Wonderland by Lewis Carroll and depicts several important points of its plot, leading the viewer from the beginning of the story to its end. Most 3D models were textured in a way that mimics handdrawn shading techniques. In addition, grease pencil was used to create outlines of most objects to achieve a resemblance to illustrations that may be found in a children's book.`;

function delayWindow(clickedImg) {
  img01.style.visibility='visible';
  document.getElementById('id01').style.display='block';
  animationVideo.pause();
  rusSwitch.addEventListener("click", translateRU);
  engSwitch.addEventListener("click", translateENG);

if (portfolio.innerText === 'портфолио') {
    translateRU();
  } else {
    translateENG();
}}

async function openImgWindow(clickedImg) {
  switch (clickedImg) {
  case 'thumb1':
    opt1.src = '/assets/images for carousels/img_1.webp';
    opt2.src = '/assets/images for carousels/img_1_1.webp';
    opt3.src = '/assets/images for carousels/img_1_2.webp';
    img01.src = '/assets/images for carousels/img_1.png';
    img01.alt = 'Alice in Wonderland';
    img02.src = '/assets/images for carousels/img_1_1.png';
    img03.src = '/assets/images for carousels/img_1_2.png';
    animationVideo.src = '/assets/images for carousels/vid_1.mov';
    animationVideo.poster = '/assets/images for carousels/img_1.png';
    headerText.innerText = 'Alice in Wonderland';
    break;
  case 'thumb2':
    opt1.src = '/assets/images for carousels/img_2.webp';
    opt2.src = '/assets/images for carousels/img_2_1.webp';
    opt3.src = '/assets/images for carousels/img_2_2.webp';
    img01.src = '/assets/images for carousels/img_2.png';
    img01.alt = 'Peanut butter and jelly';
    img02.src = '/assets/images for carousels/img_2_1.png';
    img03.src = '/assets/images for carousels/img_2_2.png';
    animationVideo.src = '/assets/images for carousels/vid_2.mov';
    animationVideo.poster = '/assets/images for carousels/img_2.png';
    headerText.innerText = 'PB&J';
    break;
  case 'thumb3':
    opt1.src = '/assets/images for carousels/img_3.webp';
    opt2.src = '/assets/images for carousels/img_3_1.webp';
    opt3.src = '/assets/images for carousels/img_3_2.webp';
    img01.src = '/assets/images for carousels/img_3.png';
    img01.alt = 'Tiny wizard';
    img02.src = '/assets/images for carousels/img_3_1.png';
    img03.src = '/assets/images for carousels/img_3_2.png';
    animationVideo.src = '/assets/images for carousels/vid_3.mov';
    animationVideo.poster = '/assets/images for carousels/img_3.png';
    headerText.innerText = 'Wizard in Training';
    break;
  case 'thumb4':
    opt1.src = '/assets/images for carousels/img_4.webp';
    opt2.src = '/assets/images for carousels/img_4_1.webp';
    opt3.src = '/assets/images for carousels/img_4_2.webp';
    img01.src = '/assets/images for carousels/img_4.png';
    img01.alt = 'Clawmachine';
    img02.src = '/assets/images for carousels/img_4_1.png';
    img03.src = '/assets/images for carousels/img_4_2.png';
    animationVideo.src = '/assets/images for carousels/vid_4.mov';
    animationVideo.poster = '/assets/images for carousels/img_4.png';
    headerText.innerText = 'Clawception';
    break;
  case 'thumb5':
    opt1.src = '/assets/images for carousels/img_5.webp';
    opt2.src = '/assets/images for carousels/img_5_1.webp';
    opt3.src = '/assets/images for carousels/img_5_2.webp';
    img01.src = '/assets/images for carousels/img_5.png';
    img01.alt = 'Inside of my bag';
    img02.src = '/assets/images for carousels/img_5_1.png';
    img03.src = '/assets/images for carousels/img_5_2.png';
    animationVideo.src = '/assets/images for carousels/vid_5.mov';
    animationVideo.poster = '/assets/images for carousels/img_5.png';
    headerText.innerText = "What's in my bag?";
    break;
  case 'thumb6':
    opt1.src = '/assets/images for carousels/img_6.webp';
    opt2.src = '/assets/images for carousels/img_6_1.webp';
    opt3.src = '/assets/images for carousels/img_6_2.webp';
    img01.src = '/assets/images for carousels/img_6.png';
    img01.alt = 'LOTR rings';
    img02.src = '/assets/images for carousels/img_6_1.png';
    img03.src = '/assets/images for carousels/img_6_2.png';
    animationVideo.src = '/assets/images for carousels/vid_6.mov';
    animationVideo.poster = '/assets/images for carousels/img_6.png';
    headerText.innerText = 'Rings';
    break;
  case 'thumb7':
    opt1.src = '/assets/images for carousels/img_7.webp';
    opt2.src = '/assets/images for carousels/img_7_1.webp';
    opt3.src = '/assets/images for carousels/img_7_2.webp';
    img01.src = '/assets/images for carousels/img_7.png';
    img01.alt = 'Roboflorists';
    img02.src = '/assets/images for carousels/img_7_1.png';
    img03.src = '/assets/images for carousels/img_7_2.png';
    animationVideo.src = '/assets/images for carousels/vid_7.mov';
    animationVideo.poster = '/assets/images for carousels/img_7.png';
    headerText.innerText = 'Roboflorists';
    break;
  case 'thumb8':
    opt1.src = '/assets/images for carousels/img_8.webp';
    opt2.src = '/assets/images for carousels/img_8_1.webp';
    opt3.src = '/assets/images for carousels/img_8_2.webp';
    img01.src = '/assets/images for carousels/img_8.png';
    img01.alt = 'Tiny dragon';
    img02.src = '/assets/images for carousels/img_8_1.png';
    img03.src = '/assets/images for carousels/img_8_2.png';
    animationVideo.src = '/assets/images for carousels/vid_8.mov';
    animationVideo.poster = '/assets/images for carousels/img_8.png';
    headerText.innerText = 'AU';
    break;
  case 'thumb9':
    opt1.src = '/assets/images for carousels/img_9.webp';
    opt2.src = '/assets/images for carousels/img_9_1.webp';
    opt3.src = '/assets/images for carousels/img_9_2.webp';
    img01.src = '/assets/images for carousels/img_9.png';
    img01.alt = 'Strawberry jam';
    img02.src = '/assets/images for carousels/img_9_1.png';
    img03.src = '/assets/images for carousels/img_9_2.png';
    animationVideo.src = '/assets/images for carousels/vid_9.mov';
    animationVideo.poster = '/assets/images for carousels/img_9.png';
    headerText.innerText = 'Strawberry Confession';
    break;
  case 'thumb10':
    opt1.src = '/assets/images for carousels/img_10.webp';
    opt2.src = '/assets/images for carousels/img_10_1.webp';
    opt3.src = '/assets/images for carousels/img_10_2.webp';
    img01.src = '/assets/images for carousels/img_10.png';
    img01.alt = 'Orange jam';
    img02.src = '/assets/images for carousels/img_10_1.png';
    img03.src = '/assets/images for carousels/img_10_2.png';
    animationVideo.src = '/assets/images for carousels/vid_10.mov';
    animationVideo.poster = '/assets/images for carousels/img_10.png';
    headerText.innerText = 'Zesty Message';
    break;
  case 'thumb11':
    opt1.src = '/assets/images for carousels/img_11.webp';
    opt2.src = '/assets/images for carousels/img_11_1.webp';
    opt3.src = '/assets/images for carousels/img_11_2.webp';
    img01.src = '/assets/images for carousels/img_11.png';
    img01.alt = 'Moldy Monster';
    img02.src = '/assets/images for carousels/img_11_1.png';
    img03.src = '/assets/images for carousels/img_11_2.png';
    animationVideo.src = '/assets/images for carousels/vid_11.mov';
    animationVideo.poster = '/assets/images for carousels/img_11.png';
    headerText.innerText = 'Moldy Monster';
    break;
  case 'thumb12':
    opt1.src = '/assets/images for carousels/img_12.webp';
    opt2.src = '/assets/images for carousels/img_12_1.webp';
    opt3.src = '/assets/images for carousels/img_12_2.webp';
    img01.src = '/assets/images for carousels/img_12.png';
    img01.alt = 'Strawberry Character';
    img02.src = '/assets/images for carousels/img_12_1.png';
    img03.src = '/assets/images for carousels/img_12_2.png';
    animationVideo.src = '/assets/images for carousels/vid_12.mov';
    animationVideo.poster = '/assets/images for carousels/img_12_1.png';
    headerText.innerText = 'Aw the Strawberry';
    break;
}
  await new Promise(r => setTimeout(r, 300));
  delayWindow();
}

function translateENG() {
  descHeader.innerText = "Description:";
  softHeader.innerText = "Tools used:";
  creatorName.innerText = "© 2026 by Natusiterum";
  goodWish.innerText = "Wish you a wonderful day!";

  switch (headerText.innerText) {
    case 'Alice in Wonderland':
    case 'Алиса в Стране чудес':
    headerText.innerText = 'Alice in Wonderland';
    imgDesc.innerText = descAliceEng;
    usedSoftware.innerText = `Blender, DaVinci Resolve, Affinity Designer.`;
    break;
    
    case 'PB&J':
    headerText.innerText = 'PB&J';
    imgDesc.innerText = `PB&J is an animation that was created because I wanted to use Blender's metaball object for typography. Metaballs formed a layer of jelly and a layer of peanut butter that later turn into these spreads' names. I hope it looks almost as yummy as an original. (Though I wouldn't know because I'm allergic to peanuts. :c)`
    usedSoftware.innerText = `Blender, DaVinci Resolve.`; 
    break;

    case 'Wizard in Training':
    case 'Тренировка волшебника':
    headerText.innerText = 'Wizard in Training';
    imgDesc.innerText = `You see a small cloaked figure. It's a tiny wizard who's training to be the best shot in the kingdom. His weapon of choice is a rose scepter with the help of which he casts thorns and directs them right to the centres of all targets and then restores the targets to train some more. He's a very hardworking fellow.`
    usedSoftware.innerText = `Blender, DaVinci Resolve, Affinity Designer.`
    break;

    case 'Clawception':
    headerText.innerText = 'Clawception';
    imgDesc.innerText = `Clawception was born because I wanted to create something that had to do with the concept of inception. I thought that a claw machine would be the most suitable object for that. So I nested several smaller claw machines inside the big one. The result of that can be seen in the animation.`
    usedSoftware.innerText = `Blender, DaVinci Resolve, Affinity Designer.`
    break;

    case "What's in my bag?":
    case "Что в моей сумке?":
    headerText.innerText = "What's in my bag?";
    imgDesc.innerText = `I created this animation because I wanted to make use of force fields in Blender. This animation was inspired by an Internet trend where people show what they carry around inside their bags. In my version the contents of my bag include a polaroid camera, a picture of my dog, an energy drink, a sketchbook, some highlighters, some chapstick and some sweets.`
    usedSoftware.innerText = `Blender, DaVinci Resolve, Affinity Designer.`
    break;

    case 'Rings':
    case 'Кольца':
    headerText.innerText = 'Rings';
    imgDesc.innerText = `One of these 3D models was initially created for a poster assignment that I had while studying at HSE ART AND DESIGN SCHOOL (Saint-Petersburg). I decided to repurpose it for this animation but also added a version of it in English. These are rings of text saying Lord of the Rings in English and in Russian and they are obviously dedicated to Lord of the Rings by J.R.R. Tolkien. My precious...`
    usedSoftware.innerText = `Blender, DaVinci Resolve, Affinity Designer.`
    break;

    case 'Roboflorists':
    case 'Робофлористы':
    headerText.innerText = 'Roboflorists';
    imgDesc.innerText = `These two little friends are Roboflorists and they are characters of a passion project I'm working on. Their bodies resemble plant pots and they have funny expressions. I hope that soon people will get to know them better and learn about what kind of trouble these two frequently get into. But here you can see a sweet moment that they are sharing.` 
    usedSoftware.innerText = `Blender, DaVinci Resolve, Affinity Designer.`
    break;
    
    case 'AU':
    headerText.innerText = 'AU';
    imgDesc.innerText = `The concept of this tiny dragon came into my mind while I was working on an assignment I had while studying at HSE ART AND DESIGN SCHOOL (Saint-Petersburg). The assignment was to create a fantastical business and branding for it. I created a potion cafe named AU (as in alternative universe). Afterwards I made this animation to serve as an ad for the cafe. I loved creating foley sound effects for this animation.`
    usedSoftware.innerText = `Blender, Adobe Premiere Pro, Adobe Illustrator, Affinity Designer, Audacity.`
    break;
    
    case 'Strawberry Confession':
    case 'Клубничное послание':
    headerText.innerText = 'Strawberry Confession';
    imgDesc.innerText = `This is just a sweet message written with love and in (digital) strawberry jam. This animation is also the continuation of my experiments creating typography using Blender's metaball object.` 
    usedSoftware.innerText = `Blender, DaVinci Resolve.`
    break;
    
    case 'Zesty Message':
    case 'Сладкое пожелание':
    headerText.innerText = 'Zesty Message';
    imgDesc.innerText = `Here's a toast covered in orange jam but it's no ordinary jam. This jam moves across the toast to wish you to have a nice day and creates a star shape to boost your mood. This animation is also the continuation of my experiments creating typography using Blender's metaball object.`
    usedSoftware.innerText = `Blender, DaVinci Resolve.`
    break;
    
    case 'Moldy Monster':
    case 'Плесневелый монстр':
    headerText.innerText = 'Moldy Monster';
    imgDesc.innerText = `Imagine you're hungry and you go the fridge to check if there's anything you can eat there. It's almost empty. Almost. There's a slice of pizza. Great, right? Wrong. That piece of pizza is getting covered in mold. But that's not the only problem because you notice a tiny moldy monster. He's cute, right? Wrong. Again. Your vision is getting blurry and you're getting covered in mold.  Making this animation turned out to be a great practice of painting and using hair cards and bendy bones.`
    usedSoftware.innerText = `Blender, DaVinci Resolve.`
    break;
    
    case 'Aw the Strawberry':
    headerText.innerText = 'Aw the Strawberry';
    imgDesc.innerText = `Here you can see an illustration and a little animation main character of which is Aw the strawberry. Aw loves shopping for make up and black faux leather boots. The process of creating a rig for her was very interesting, especially when it came to creating bones for her leaves and stem (aka her hair). Also I made a switch for her facial expression.`
    usedSoftware.innerText = `Blender, DaVinci Resolve, Krita, Affinity Designer.`
    break;
  }}

function translateRU() {
  descHeader.innerText = "Описание:";
  softHeader.innerText = "Программы:";
  creatorName.innerText = "© 2026 Натуситерум";
  goodWish.innerText = "Желаю прекрасного дня!";

  switch (headerText.innerText) {
    case 'Alice in Wonderland':
    case 'Алиса в Стране чудес':
    headerText.innerText = 'Алиса в Стране чудес';
    imgDesc.innerText = descAliceRu;
    usedSoftware.innerText = `Blender, DaVinci Resolve, Affinity Designer.`; 
    break;

    case 'PB&J':
    headerText.innerText = 'PB&J';
    imgDesc.innerText = `PB&J — это сендвич с арахисовым маслом и джемом, о котором вы скорее всего хотя бы слышали. Данная анимация была создана в связи с сильным желанием использовать  metaballs для создания типографики. Из них собраны слои арахисового масла и джема, из которых в ходе анимации образуются названия этих ингредиентов. К сожалению, его нельзя съесть, так как он ненастоящий, а также у меня аллергия на арахис.`
    usedSoftware.innerText = `Blender, DaVinci Resolve.`; 
    break;

    case 'Wizard in Training':
    case 'Тренировка волшебника':
    headerText.innerText = 'Тренировка волшебника';
    imgDesc.innerText = `Вы видите скрытую под накидкой фигуру. Это волшебник! В его руках находится серебряный жезл, увенчанный розой. Из розы внезапно исходит голубое свечение, которое превращается в шипы. Они устремляются прямо в центры всех мишеней, парящих в далеке. Волшебнику приходится восстановить мишени, чтобы продолжить оттачивать своё мастерство.`
    usedSoftware.innerText = `Blender, DaVinci Resolve, Affinity Designer.`
    break;

    case 'Clawception':
    headerText.innerText = 'Clawception';
    imgDesc.innerText = `Название анимации отсылает к формату игры слов, возникшем из-за фильма Начало (Inception). Нужно лишь добавить любое слово к -ception, и вы получите слово, описывающее рекурсию того слова, которое вы добавили к -ception (хотя название фильма с рекурсией не связано и переводится как исток, зарождение). Мне очень хотелось создать что-то, основанное на рекурсии. Объектом анимации стал игровой аппарат с клешнёй, в который помещён игровой аппарат с клешнёй, в который помещён... Ну, вы поняли!`
    usedSoftware.innerText = `Blender, DaVinci Resolve, Affinity Designer.`
    break;

    case "What's in my bag?":
    case "Что в моей сумке?":
    headerText.innerText = "Что в моей сумке?";
    imgDesc.innerText = `Моей задачей было использовать силовые поля в Blender. Вдохновением послужил формат видео, в которых разные люди показывали содержимое своих сумок и рюкзаков, которые они всегда носят с собой. А результат вы можете увидеть в карусели.`
    usedSoftware.innerText = `Blender, DaVinci Resolve, Affinity Designer.`
    break;

    case 'Rings':
    case 'Кольца':
    headerText.innerText = 'Кольца';
    imgDesc.innerText = `Моя прелесть...
    Или модель кольца, сложенного из названия серии книг Дж.Р.Р.Толкина. Изначально одна из моделей создавалась в качестве учебного проекта по созданию плакатов во время обучения на программе ДПО «Коммуникационный дизайн. Базовый курс» Школы дизайна НИУ ВШЭ (Санкт-Петербург). Я решила, что лучше подчистить модель и дополнить её похожей, но с названием на английском.`
    usedSoftware.innerText = `Blender, DaVinci Resolve, Affinity Designer.`
    break;

    case 'Roboflorists':
    case 'Робофлористы':
    headerText.innerText = 'Робофлористы';
    imgDesc.innerText = `Эти две крохи — роботы-флористы и по совместительству главные герои моего passion проекта, находящегося в процессе создания. Их корпусы напоминают по форме цветочные горшки, посередине которых находится экран отображающие их реакции на различные события. Надеюсь, что скоро вы сможете узнать о них побольше, а пока можете взглянуть на милый момент между этими двумя.` 
    usedSoftware.innerText = `Blender, DaVinci Resolve, Affinity Designer.`
    break;

    case 'AU':
    headerText.innerText = 'AU';
    imgDesc.innerText = `Первый набросок для дракончика появился во время выполнения учебного проекта. Анимация была создана позже и является промороликом для фантастического кафе зелий «АУ», дракошик стал маскотом для него. Помимо создание 3D моделей, настройки света и переключения между камерами, мне было необходимо создать звуковые эффекты для сопровождения видеоряда. Заниматься их созданием было очень интересно.`
    usedSoftware.innerText = `Blender, Adobe Premiere Pro, Adobe Illustrator, Affinity Designer, Audacity.`
    break;

    case 'Strawberry Confession':
    case 'Клубничное послание':
    headerText.innerText = 'Клубничное послание';
    imgDesc.innerText = `Это тост, но необычный, а с любовным посланием из клубничного джема. «Клубничное послание» входит в серию работ, в которых metaballs были использованы для создания типографики.` 
    usedSoftware.innerText = `Blender, DaVinci Resolve.`
    break;

    case 'Zesty Message':
    case 'Сладкое пожелание':
    headerText.innerText = 'Сладкое пожелание';
    imgDesc.innerText = `Мы с этим тостом желаем вам хорошего дня! Пожелание выполнено апельсиновым джемом (цифровой апельсиновый джем из metaballs).`
    usedSoftware.innerText = `Blender, DaVinci Resolve.`
    break;

    case 'Moldy Monster':
    case 'Плесневелый монстр':
    headerText.innerText = 'Плесневелый монстр';
    imgDesc.innerText = `Представьте: вы очень голодны и поэтому решаете проверить, что есть в холодильнике. Там пусто. Почти пусто. В нём есть кусочек пиццы. Здорово, да? Нет. Он покрывается плесенью. Но это не единственная проблема. Вы замечаете крошечного плесневелого монстра. Он милый, да? Ещё одна ошибка. Ваше зрение мутнеет и вы теряете сознание. Эта анимация стала отличным поводом попрактиковаться в создании имитации "шерсти" и использовании гибких костей для рига.`
    usedSoftware.innerText = `Blender, DaVinci Resolve.`
    break;
    
    case 'Aw the Strawberry':
    headerText.innerText = 'Aw the Strawberry';
    imgDesc.innerText = `В карусели представлены иллюстрация и анимация с моей персонажкой, которую зовут Aw, но на русском её звали бы Ника. Для неё был сделан риг, процесс создания которого был невероятно интересным, особенно части рига, отвечающей за движение плодоножки и листиков, выступающих в качестве причёски. Также я создала переключатель для выражений её лица, чтобы использовать его в будущих анимациях с ней.`
    usedSoftware.innerText = `Blender, DaVinci Resolve, Krita, Affinity Designer.`
    break;
}}


img1.setAttribute("onclick", "openImgWindow('thumb1')");
img2.setAttribute("onclick", "openImgWindow('thumb2')");
img3.setAttribute("onclick", "openImgWindow('thumb3')");
img4.setAttribute("onclick", "openImgWindow('thumb4')");
img5.setAttribute("onclick", "openImgWindow('thumb5')");
img6.setAttribute("onclick", "openImgWindow('thumb6')");
img7.setAttribute("onclick", "openImgWindow('thumb7')");
img8.setAttribute("onclick", "openImgWindow('thumb8')");
img9.setAttribute("onclick", "openImgWindow('thumb9')");
img10.setAttribute("onclick", "openImgWindow('thumb10')");
img11.setAttribute("onclick", "openImgWindow('thumb11')");
img12.setAttribute("onclick", "openImgWindow('thumb12')");

// CLOSE MODAL
const close = document.getElementById("close-modal");
close.addEventListener("click", closeModal);

window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented || modal.style.display == "none", mobileModalError.style.visibility == "visible") {
      return; // Do nothing if the event was already processed
    }

    switch (event.key) {
      case "ArrowLeft":
        plusDivs(-1);
        break;
      case "ArrowRight":
        plusDivs(1);
        break;
      case " ":
        if (animationVideo.style.display == "none") {
          animationVideo.pause();
        } else {playVid();}
        break;
      case "Escape":
        closeModal();
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  },
  true,
);

function playVid() {
  if (animationVideo.paused == true) {
    animationVideo.play();
} else {
  animationVideo.pause();
}
};

function closeModal() {
  modal.style.display = "none";
  mobileModalError.classList.remove('txt-visible');
  manualCopyMobile.classList.remove('txt-visible');
  reset();
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    reset();
  }
  if (event.target == mobileModalError) {
    clickElsewhere();
  }
}

// BUTTONS
const buttonElement = document.querySelector('.js-email-button');
buttonElement.addEventListener("click", copyEmail);
let tooltip = document.querySelector('.tooltip-txt');
let text = 'natusiterum.design@gmail.com';
let manualCopy = document.querySelector('.manual-copy');


function copyEmail() {
  buttonElement.classList.add('grow');
  buttonElement.innerText = 'natusiterum.design@gmail.com';
  copyContent();
  tooltip.classList.add('txt-visible');
}

let copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
    // showErrorMsg();
    if (portfolio.innerText === 'портфолио') {
    tooltipText.innerText = 'Скопирован!';
    } else {
     tooltipText.innerText = 'Copied!'; 
    }
  } catch (err) {
    console.error('Failed to copy: ', err);
    showErrorMsg();
  }
}

function showErrorMsg() {
  mobileModalError.classList.add('txt-visible');
  manualCopyMobile.classList.add('txt-visible');
}

function clickElsewhere() {
  mobileModalError.classList.remove('txt-visible');
  manualCopyMobile.classList.remove('txt-visible');
}

buttonElement.addEventListener("focusout", returnBack);

function returnBack() {
  buttonElement.classList.remove('grow');
  buttonElement.innerText = 'email';
  tooltip.classList.remove('txt-visible');
}
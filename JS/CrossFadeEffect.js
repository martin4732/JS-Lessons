const selectionSlideShow = document.getElementById('slideshow')
const selectingCrossEffect = document.getElementById('crosseffect')
const changingH3Element = document.getElementById('header');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
let imageSource = document.getElementById('image')
let currentImageCount = 0;
const arrayOfImages = ["../IMAGES/img1.png", "../IMAGES/img2.png", "../IMAGES/img3.png", "../IMAGES/img4.png", "../IMAGES/img5.png"]

changingH3Element.innerHTML = 'JAVASCRIPT SLIDE SHOW CROSS FADE EFFECT'
nextButton.innerHTML = 'NEXT PHOTO';
previousButton.innerHTML = 'PREVIOUS PHOTO'

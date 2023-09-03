(function () {

    const selectionSlideShow = document.getElementById('slideshow')
const selectingCrossEffect = document.getElementById('crosseffect')
const changingH3Element = document.getElementById('header');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
let imageSource = document.getElementById('image')
let currentImageCount = 0;
let currentAltImageAttributeAttribute = 0;
const arrayOfImages = ["../IMAGES/img1.png", "../IMAGES/img2.png", "../IMAGES/img3.png", "../IMAGES/img4.png", "../IMAGES/img5.png"]
const arrayOfAlt = ["First Image", "Second Image", "Third Image", "Fouth Image", "Fifth Image"]

changingH3Element.innerHTML = 'JAVASCRIPT SLIDE SHOW'
nextButton.innerHTML = 'NEXT';
previousButton.innerHTML = 'PREVIOUS'

nextButton.addEventListener('click', function() {
        currentImageCount++;
        currentAltImageAttribute++;
        if (currentImageCount > arrayOfImages.length -1) {
            currentImageCount = 0;
            currentAltImageAttribute = 0;
        }
        imageSource.src = arrayOfImages[currentImageCount];
        imageSource.alt = arrayOfAlt[currentAltImageAttribute]
})

previousButton.addEventListener('click', function() {
    currentImageCount--;
    currentAltImageAttributeAttribute--;
    if (currentImageCount < 0) {
        currentImageCount = arrayOfImages.length -1
        currentAltImageAttributeAttribute = arrayOfAlt.length -1;
    }
    imageSource.src = arrayOfImages[currentImageCount] 
    imageSource.alt = arrayOfAlt[currentAltImageAttributeAttribute];

})
})()

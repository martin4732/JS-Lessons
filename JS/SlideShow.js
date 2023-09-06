const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const myImages = document.getElementById('image')
let currentImageCount = 0;
var arrayOfImages =['../IMAGES/img1.png', '../IMAGES/img2.png', '../IMAGES/img3.png', '../IMAGES/img4.png', '../IMAGES/img5.png'];

nextButton.addEventListener('click', function(){
    currentImageCount++;
    if (currentImageCount > arrayOfImages.length - 1) {
        currentImageCount = 0;
    }
    myImages.src = arrayOfImages[currentImageCount];
})

previousButton.addEventListener('click', function(){
    currentImageCount--;
    if (currentImageCount < 0) {
        currentImageCount = arrayOfImages.length -1;
    }
    myImages.src = arrayOfImages[currentImageCount]
})
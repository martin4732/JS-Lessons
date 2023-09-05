
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
let currentImageCount = 0;
var arrayOfImages =['../IMAGES/img1.png', '../IMAGES/img2.png', '../IMAGES/img3.png', '../IMAGES/img4.png', '../IMAGES/img5.png'];

nextButton.onclick = nextPhoto;

function nextPhoto() {
    currentImageCount++;
    document.getElementById('image').src = arrayOfImages[currentImageCount]
}
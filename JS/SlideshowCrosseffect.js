var container = document.getElementById('content');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
var currentImageCount = 0;
const imagesInArray = ['../IMAGES/img1.png', '../IMAGES/img2.png', '../IMAGES/img3.png', '../IMAGES/img4.png', 
'../IMAGES/img5.png',];

nextButton.addEventListener('click', function(event) {
    event.preventDefault();
    currentImageCount++;
    if (currentImageCount > imagesInArray.length - 1) {
        currentImageCount = 0;
    }
    creatingElementsAndRemovindChild();  
})

previousButton.addEventListener('click', function(){
    currentImageCount--;
    if (currentImageCount < 0) {
        currentImageCount =  imagesInArray.length -1;
    }
    creatingElementsAndRemovindChild();
})


function creatingElementsAndRemovindChild() {

    var newImageEelement = document.createElement('img');
    newImageEelement.src = imagesInArray[currentImageCount];
    newImageEelement.className = "fadeinImg";
    container.appendChild(newImageEelement);

    if (container.children.length > 2) {
        container.removeChild(container.children[0])
    }

}

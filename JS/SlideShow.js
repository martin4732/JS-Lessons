(function() {
    
        const image = document.getElementById('images');
        const next = document.getElementById('next');
        const pre = document.getElementById('previous');
        const myimages = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png'];
        let currntImage = 0;

        next.addEventListener('click', function() { 
            currntImage++;
            if (currntImage > myimages.length - 1) {
                //sets the image to always be the last image without moving to the first image
                //currntImage = myimages.length - 1;
            //returns image back to the first image after the 
                currntImage = 0;
            } 
            
            image.src = myimages[currntImage];

        })
        pre.addEventListener('click', function() {
            if (currntImage === 0) {
                image.src = myimages[currntImage];
            } else {
                currntImage--;
                image.src = myimages[currntImage];
            }
        })
} () )



/*
var currntImage = 0;
document.getElementById('next').onclick = nextPhoto

function nextPhoto() {
    currntImage++;
    document.getElementById('images').src = myimages[currntImage];
} */
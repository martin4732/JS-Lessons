 paragraphs = 'THIS VARIABLE IS A GLOBAL VARIABLE';
(function() {

        var paragraphs = document.querySelectorAll('p');
        for (var para = 0;  para < paragraphs.length;  para++ ){
        paragraphs[para].style.color ="Blue"
        document.getElementById('myclass').style.background ='grey'
        paragraphs[para].style.textAlign = 'center'
        document.getElementById('myclass').style.width = '50%'
        document.getElementById('myclass').style.padding ='10px'
        document.getElementById('myclass').style.position ='center'
    }

} () )
 
console.log(paragraphs);

/* with namespacing anf closure, we can use the line of code below;
        (function(){
            code goes in here.
        }())

        this script runs as soon thre page loads without having to call the function

*/
   
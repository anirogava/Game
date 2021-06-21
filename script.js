var luigi = document.getElementById('luigi');
var box = document.getElementById('box');
var error = document.getElementById('error');
var overlayContainer = document.getElementById('overlay');
var start = document.getElementById('button');

function jump(){
    if(luigi.classList != 'active'){
        luigi.classList.add('active')
    }
    luigi.classList.add('active'); 
    setTimeout(function(){ 
        luigi.classList.remove('active'); 
    }, 500);
};
window.onclick = function(event) {
    return jump(event);
}

var check = setInterval(function() {
    var luigiTop = 
    parseInt(window.getComputedStyle(luigi).getPropertyValue('top'));
    var boxLeft = 
    parseInt(window.getComputedStyle(box).getPropertyValue('left'));
    if (boxLeft <20 && boxLeft > 0 && luigiTop >= 200) {
        box.style.animation = 'none';
        box.style.display = 'none';
        error.style.display = 'block';
    }
}, 10);
function overlay (){
    if(overlayContainer.style.display !== 'none'){
        box.style.animation = 'none';
        luigi.style.animation = 'none';
    }
    overlayContainer.classList.add('inactive')
}
start.onclick = function(event){
    event.stopPropagation();
    overlay ();
}



var luigi = document.getElementById('luigi');
var box = document.getElementById('box');
var error = document.getElementById('error');
var overlayContainer = document.getElementById('overlay');
var start = document.getElementById('button');
var over = document.getElementById('over');

function jump(){
    if(luigi.classList != 'active'){
        luigi.classList.add('active')
    }
    luigi.classList.add('active'); 
    setTimeout(function(){ 
        luigi.classList.remove('active'); 
    }, 500);
};
window.document.addEventListener('keypress', logKey);
function logKey(e) {
  jump();
}
var check = setInterval(function() {
    var luigiTop = 
    parseInt(window.getComputedStyle(luigi).getPropertyValue('top'));
    var boxLeft = 
    parseInt(window.getComputedStyle(box).getPropertyValue('left'));
    if (boxLeft <20 && boxLeft > 0 && luigiTop >= 200) {
        box.style.display = 'none';
        error.style.display = 'block';
    }
}, 10);
function overlay (){
    overlayContainer.classList.add('inactive')
}
start.onclick = function(event){
    event.stopPropagation();
    box.classList.add('active')
    overlay ();
}
overlayContainer.onclick = function(e){
    e.stopPropagation();
}
over.onclick = function(){
    error.style.display = 'none';
    box.style.display = 'block';
    box.classList.add('active')
    console.log(event)
}


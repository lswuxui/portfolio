function init(){
    //estrelas
  var style = ["style1", "style2", "style3", "style4"];
  var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
  var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];
  
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  var estrela = "";
  var qtdeEstrelas = 250;
  var noite = document.querySelector(".constelacao");
  var widthWindow = window.innerWidth;
  var heightWindow = window.innerHeight;
  
  for (var i = 0; i < qtdeEstrelas; i++) {
    estrela += "<span class='estrela " + style[getRandomArbitrary(0, 4)] + " " + opacity[getRandomArbitrary(0, 6)] + " "
    + tam[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." +getRandomArbitrary(0, 9)+ "s; left: "
    + getRandomArbitrary(0, widthWindow) + "px; top: " + getRandomArbitrary(0, heightWindow) + "px;'></span>";
  }
  
  noite.innerHTML = estrela;
  
  //meteoros
  
  var numeroAleatorio = 5000;
  
  setTimeout(function(){
    carregarMeteoro();
  }, numeroAleatorio);
  
  function carregarMeteoro(){
    setTimeout(carregarMeteoro, numeroAleatorio);
    numeroAleatorio = getRandomArbitrary(5000, 10000);
    var meteoro = "<div class='meteoro "+ style[getRandomArbitrary(0, 4)] +"'></div>";
    document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = meteoro;
    setTimeout(function(){
      document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = "";
    }, 1000);
  }
  
}
window.onload = init;
// -------------------------

  //estrelas
var style = ["style1", "style2", "style3", "style4"];
var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var estrela = "";
var qtdeEstrelas = 250;
var noite = document.querySelector(".constelacao1");
var widthWindow = window.innerWidth;
var heightWindow = window.innerHeight;

for (var i = 0; i < qtdeEstrelas; i++) {
  estrela += "<span class='estrela " + style[getRandomArbitrary(0, 4)] + " " + opacity[getRandomArbitrary(0, 6)] + " "
  + tam[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." +getRandomArbitrary(0, 9)+ "s; left: "
  + getRandomArbitrary(0, widthWindow) + "px; top: " + getRandomArbitrary(0, heightWindow) + "px;'></span>";
}

noite.innerHTML = estrela;

//meteoros

var numeroAleatorio = 5000;

setTimeout(function(){
  carregarMeteoro();
}, numeroAleatorio);

function carregarMeteoro(){
  setTimeout(carregarMeteoro, numeroAleatorio);
  numeroAleatorio = getRandomArbitrary(5000, 10000);
  var meteoro = "<div class='meteoro "+ style[getRandomArbitrary(0, 4)] +"'></div>";
  document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = meteoro;
  setTimeout(function(){
    document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = "";
  }, 1000);
}
window.onload = init;

// scrolle
const elm = document.querySelectorAll('.section');
const elmCount = elm.length;
elm.forEach(function(item, index){
  item.addEventListener('mousewheel', function(event){
    event.preventDefault();
    let delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {
      delta = event.wheelDelta / 120;
      if (window.opera) delta = -delta;
    } 
    else if (event.detail)
      delta = -event.detail / 3;
      let moveTop = window.scrollY;
      let elmSelector = elm[index];

      // wheel down : move to next section
    if (delta < 0){
        if (elmSelector !== elmCount-1){
          try{
            moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
          }catch(e){}
        }
      }
      // wheel up : move to previous section
    else{
      if (elmSelector !== 0){
        try{
          moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
        }catch(e){}
      }
    }
  
  const body = document.querySelector('html');
    window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
  });
});

const donut = document.getElementsByClassName("donut")[0]

let totalMinwon = 72, resolveMinwon = 12
let t4 = 0
const donutAnimation = setInterval(() => {
  donut.dataset.percent = t4
  donut.style.background = `conic-gradient(#4F98FF 0 ${t4}%, #DEDEDE ${t4}% 100% )`
  t4++ >= totalMinwon && clearInterval(donutAnimation)
}, 10)
const repeat = setInterval(() => {
  barAnimation() || barAnimation2() || barAnimation3()
  donutAnimation() || donutAnimation2()
})
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("myslide");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 300);
}
// ------------------------------------------------------
window.addEventListener("wheel", function(e){
  e.preventDefault();
},{passive : false});

$(selector).mCustomScrollbar();
$(selector).removeClass("mCustomScrollbar");
$(selector).css("-webkit-overflow-scrolling","touch");

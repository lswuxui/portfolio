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
    setTimeout(carousel, 3000);
}
// ------------------------------------------------------
const list = document.querySelector('.list');
const listScrollWidth = list.scrollWidth;
const listClientWidth = list.clientWidth;
let startX = 0;
let nowX = 0;
let endX = 0;
let listX = 0;
const onScrollStart = (e) => {
  startX = getClientX(e);
  window.addEventListener('mousemove', onScrollMove);
  window.addEventListener('touchmove', onScrollMove);
  window.addEventListener('mouseup', onScrollEnd);
  window.addEventListener('touchend', onScrollEnd);
};
const onScrollMove = (e) => {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX);
};
const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    list.style.transition = `all 0.3s ease`;
    listX = 0;
  } else if (listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
    list.style.transition = `all 0.3s ease`;
    listX = listClientWidth - listScrollWidth;
  }

  window.removeEventListener('mousedown', onScrollStart);
  window.removeEventListener('touchstart', onScrollStart);
  window.removeEventListener('mousemove', onScrollMove);
  window.removeEventListener('touchmove', onScrollMove);
  window.removeEventListener('mouseup', onScrollEnd);
  window.removeEventListener('touchend', onScrollEnd);
  window.removeEventListener('click', onClick);

  setTimeout(() => {
    bindEvents();
    list.style.transition = '';
  }, 300);
};
const onClick = (e) => {
  if (startX - endX !== 0) {
    e.preventDefault();
  }
};
const getClientX = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX = () => {
  return parseInt(getComputedStyle(list).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX = (x) => {
  list.style.transform = `translateX(${x}px)`;
};
const bindEvents = () => {
  list.addEventListener('mousedown', onScrollStart);
  list.addEventListener('touchstart', onScrollStart);
  list.addEventListener('click', onClick);
};
bindEvents();

$(window).resize(function(){resizeYoutube();});
$(function(){resizeYoutube();});
function resizeYoutube(){ 
  $("iframe").each(function(){ 
     if( /^https?:\/\/www.youtube.com\/embed\//g.test($(this).attr("src")) ){ 
         $(this).css("width","100%"); 
           $(this).css("height",Math.ceil( parseInt($(this).css("width")) * 480 / 854 ) + "px");
          } 
    }); 
  }

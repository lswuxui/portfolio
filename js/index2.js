// const observer = new IntersectionObserver(
//     (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("fade-in");
//         } else {
//           entry.target.classList.remove("fade-in");
//         }
//       });
//     },
//     { threshold: 0.1 }
//   );
//   const targetElements = document.querySelectorAll(".fade-wrap");
//   targetElements.forEach((element) => {
//     observer.observe(element);
//   });
//   -------------------------------------------------------------
var colors = new Array(
  [248, 246, 242],
  [247, 205, 150],
  [248, 186, 105],
  [248, 186, 105],
  [247, 205, 150],
  [248, 246, 242]
  );
var step = 0;
var colorIndices = [0,1,2,3];
var gradientSpeed = 0.01;
function updateGradient()
{
  if ( $===undefined ) return;
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];
var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";
var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";
 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
  }
}
setInterval(updateGradient,10);
//   ----------------------------------------------------------------------------
function scroll(){
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.screenY;
  document.querySelectorAll(".content__item").forEach(item => {
      if(scrollTop > item.offsetTop - window.innerHeight/2){
          item.classList.add("show");
      }
  });
  requestAnimationFrame(scroll);
}
scroll();
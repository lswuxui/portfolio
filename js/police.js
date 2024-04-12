const sliderWrap = document.querySelector('.slider__wrap');
const sliderImg = document.querySelector('.slider__img');
const sliderInner = document.querySelector('.slider__inner');
const sliderBtn = document.querySelector('.slider__btn');
const sliderBtnPrev = sliderBtn.querySelector('.slider__btn .prev');
const sliderBtnNext = sliderBtn.querySelector('.slider__btn .next');
const sliderDot = document.querySelector('.slider__dot');
let currentIndex = 0;						
let sliderWidth = sliderImg.offsetWidth, 	
    dotIndex = "",
    interval = 3000,						
    sliderTimer = "";						// setInterval 컨트롤 용, 빈문자열 변수 선언해놓기
let sliderLength = document.querySelectorAll('.slider').length;

function init(){
    createDot();	
    imgClone();		
}
init();

window.addEventListener("load",()=>{		// 창 실행되면 오토플레이 실행시키기 위함. init()에만 쓰면 무한실행
    autoPlay();		// 자동 플레이
})

// 닷메뉴 만들기
function createDot(){
    for (i = 1; i <= sliderLength; i++) {
        dotIndex += `<a href='#' class='dot'>이미지${i}</a>`;		//이미지갯수만큼 닷 만들기
    }
    dotIndex += '<a href="#" class="play"></a>';					//오토플레이,정지를 위해 추가됨
    dotIndex += '<a href="#" class="stop"></a>';
    sliderDot.innerHTML += dotIndex;								//만든 구문 태그형식으로 넣기
    sliderDot.firstElementChild.classList.add("active");			//첫번째이미지에 클래스 부여
}

function imgClone(){
    let sliderFirst = document.querySelectorAll('.slider')[0],			 	
        sliderLast = document.querySelectorAll('.slider')[sliderLength -1],	
        cloneFirst = sliderFirst.cloneNode(true),	// 첫번째 이미지 복사
        cloneLast = sliderLast.cloneNode(true);		// 마지막 이미지 복사
     sliderInner.appendChild(cloneFirst);			//첫번째 이미지 복사해서 뒤에 넣기
    sliderLength = document.querySelectorAll('.slider').length;		//변경된 전체길이 값 다시 대입
}
// 이미지 총 길이 넣기
sliderInner.style.width = (sliderWidth * (sliderLength)) + "px";		// 가변되는 이미지 갯수때문에 자바스크립트로 해결
const slider = document.querySelectorAll('.slider');					// 슬라이드 컨트롤 때문에 이미지 갯수를 함수 실행 이후로 미룸
function autoPlay(){
    sliderTimer = setInterval(()=>{				// 셋인터벌 실행시킴
        let intervalNum = currentIndex+1;		// 복사된 값때문에 시작값은 1임,
        console.log(intervalNum)
        console.log(sliderLength)
        if(intervalNum == sliderLength-1)intervalNum = 0;			// 마지막 이미지에서 다음이미지 넘어가는 과정에 0으로 초기화
        gotoslider(intervalNum);				// 슬라이더 이동함수에 변경된 인덱스 부여
    }, interval);								// 언제? 3초마다 (ex_ 최초 로드시 0->1 되는 과정이 3초후에 일어남.)
}
function stopPlay(){
    clearInterval(sliderTimer);				// 셋인터벌 중지
}
function gotoslider(index){
    sliderInner.classList.add("transition");		// 트랜지션효과부여하기위해서 사용
    let posInitial = sliderInner.offsetLeft;		// -800px
    sliderInner.style.left = -sliderWidth * (index + 1) + "px";
    currentIndex = index;
    if(index >= 3){
        index==0;
    }
    // 닷 메뉴도 같이 이동
    document.querySelectorAll(".slider__dot .dot").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".slider__dot .dot")[index].classList.add("active");    
}
function checkIndex(){
    sliderInner.classList.remove("transition");			//트랜지션 css를 일시적으로 지움
    sliderBtn.classList.add("disable");					//버그 방지용 

    if(currentIndex == sliderLength){
        sliderInner.style.left = -(1 * sliderWidth) + "px";
        currentIndex = 0;
    }

    if(currentIndex == -1){
        sliderInner.style.left = -(sliderLength * sliderWidth) + "px";
        currentIndex = sliderLength -1;
    }
}
sliderBtnPrev.addEventListener("click", () => {
    let prevIndex = currentIndex - 1;
    if(prevIndex == -1){
        prevIndex = sliderLength-1;					//1번이미지에서 이전버튼 시 마지막 이미지의 인덱스값으로 변경
    }
    gotoslider(prevIndex);
})
sliderBtnNext.addEventListener("click", () => {
    let nextIndex = currentIndex + 1;
    if(nextIndex == sliderLength){
        nextIndex = 0;						//마지막에서 다음 버튼 시 인덱스 0(첫번재)로 강제변경
    }
    gotoslider(nextIndex);
})
sliderInner.addEventListener("mouseenter", stopPlay);		//이미지영역(일렬로 되어있음)에 마우스 오버시 오토플레이 정지 
sliderInner.addEventListener("mouseleave", autoPlay);		//위에랑 반대
sliderInner.addEventListener("transitionend", checkIndex);	//이너에 있는 트랜지션효과가 끝나면 자동으로 인덱스체크가 실행되게 
const sliderPlay = document.querySelector('.slider__dot .play');
const sliderStop = document.querySelector('.slider__dot .stop');
sliderPlay.addEventListener("click",()=>{
    autoPlay();
    sliderPlay.style.display = "none";
    sliderStop.style.display = "inline-block";
});
sliderStop.addEventListener("click",()=>{
    stopPlay();
    sliderStop.style.display = "none";
    sliderPlay.style.display = "inline-block";
});
// 닷 버튼 클릭했을 때 해당 닷버튼의 이미지로 이동 
document.querySelectorAll('.slider__dot .dot').forEach((a, index) => {
    a.addEventListener('click', e => {
        document.querySelectorAll('.slider__dot .dot').forEach(b => {
            b.classList.remove('active');
        });
        a.classList.add('active');
        gotoslider(index);
        sliderInner.style.left = `${-((index + 1) * sliderWidth)}px`;
        sliderInner.classList.add("transition")
        currentIndex = index;
    });
});	
// ---------------------------------------------------------------------
function show_layer(di_name){
    document.all.di_01.style.display="none";
    document.all.di_02.style.display="none";
    switch(di_name)
    {
     case '1':
     document.all.di_01.style.display="";
     break;
     case '2':
     document.all.di_02.style.display="";
     break;
    }
   }
// --------------------------------------------------
function div_layer(tr_name){
    document.all.tr_01.style.display="none";
    document.all.tr_02.style.display="none";
    document.all.tr_03.style.display="none";
    document.all.tr_04.style.display="none";
    document.all.tr_05.style.display="none";
    switch(tr_name)
    {
     case '1':
     document.all.tr_01.style.display="";
     break;
     case '2':
     document.all.tr_02.style.display="";
     break;
     case '3':
     document.all.tr_03.style.display="";
     break;
     case '4':
     document.all.tr_04.style.display="";
     break;
     case '5':
     document.all.tr_05.style.display="";
     break;
    }
   }
   
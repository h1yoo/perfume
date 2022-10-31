$(document).ready(function(){  //모바일용으로 작성함
	//console.log("연결됨");
	//상단 텍스트 내려옴
	$("header h1").delay(500).slideDown();
	
	/*향수의 어원 h2
	$("#f1").click(function(){
		$(this).animate({marginLeft:"100vw"},"slow");
	});*/
	
	//상단 오른쪽 햄버거 아이콘 클릭  (이벤트형 메소드는 함수와 함께 사용함)
	$("header button").click(function() {
		$("nav").slideDown();  //display:block; 된다
		$("body").css("overflow", "hidden");  //스크롤바는 overflow로 설정하면 됨 ==> 스크롤바 안생김
	}); //한 번 더 누르면 메뉴창 사라지게 하고 싶은데 .. 어떻게 하지..?
	
	//메뉴 항목 또는 Top 아이콘 클릭
	$("a").click(function(){
		$("nav").slideUp();  //display:none; 됨
		$("body").css("overflow", "auto");	//스크롤이 되게 함
	});

	//fiqure 요소 넓이
	console.log($("figure").width()); //output_ 430  => #layout과 figure등에 테두리 지워야 430 나옴 (원래는 450인데 main에 왼쪽과 오른쪽에 패딩이 10px씩 들어가 있어서 430)

	//fiqure 이미지 자동 슬라이스
	//setInterval은 일정한 시간 간격으로 지속적으로 함수 호출하는 메소드
	const autoSlide = setInterval(leftAuto, 1500);  //1000은 1초를 의미. autoSlide와 leftAuto 모두 임의로 정한 이름
	function leftAuto() {
		$("figure div").animate({left: "-430px"}, 1000, function(){
			$(this).append($("figure img").eq(0));  //append는 뒤에 추가하겠다는 것
			//$("figure div").append($("figure img").eq(0)); 위에랑 같은 코드인데 figure div대신 this 씀
			//$(this).append($(this).children().first()); 뭔가 적용 안돼서 지움
			$("figure div").css("left", 0);
		});
	}

	//eq(index) 알아내기
	$("section").children().click(function(){
		const z = $(this).index()
		console.log(z);
		$("section").children().eq(z).css("background", "tomato").siblings().css("background", "none");
	});
	
	/*function leftAuto() { 공부하기 위해 써본 것
		$("figure div").stop().animate({left: "-430px"}, "slow");
	}
	//콜백함수란 시간이 필요한 함수에서, 해당 함수의 실행이 끝난 후 호출하는 함수를 말한다.
	$("footer").click(function(){
		$(this).slideUp(1000, function(){ //slideUp은 시간이 필요한 메소드
			alert("슬라이드 됨");  //윈도우기능으로 즉시 실행됨  (원래 프로그램은 순서대로 해석해서 실행되지만, alert은 윈도우기능으로 즉시 실행하기 때문에 먼저 실행됨)
			//slideUp; 밑에 줄에 alert;하면 alert가 먼저 실행되지만, 이렇게 작성하면 slideUP한 후 alert 뜸
		});  
	});
	const x = setInterval(y, 500);  연습용으로 작성
	let i = 0;
	function y() {
		console.log("셋인터벌"+i);
		i++;  //재할당
		if(i > 30) {
			i=0;  //재할당
		}
	}*/

});//////////////////전체 마지막 부분
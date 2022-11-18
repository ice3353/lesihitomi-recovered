const blockip=['14.47.184.93']; //상수 blockip 선언
function start() { //start 함수 정의,이 함수는 동의 버튼을 누를때 실행된다
	document.getElementById("conf").style.display='none'; //html에서 id가 conf인 부분의 css를 display:none 으로 설정한다 
}
	function hiyobi(){ //hiyobi 함수 정의, 이 함수는 히요비 스위치를 누를때 작동된다
	var site=document.querySelectorAll('.main a'); //main 클래스 안에 있는 모든 a 태그를 배열(엔트리에선 리스트) 형태로 변수 site 에 저장한다 
	var himode=document.getElementById('himode').checked; //id가 himode(스위치의 id)인 태그의 켜짐/꺼짐 상태를 true/false(참/거짓) 형태로 반환한것을 변수 himode에 저장한다
	if(himode==true){ //만약 himode가 true 라면
		for (var i=0; i<site.length; i++){ //배열 site의 길이만큼 반복
			site[i].href=site[i].href.replace('https://hitomi.la','https://hiyobi.me'); //(반복문이 반복된 횟수)번째 site 요소의 href를 hitomi.la에서 hiyobi.la로 바꾼다
			site[i].href=site[i].href.replace('.html',''); //(반복문이 반복된 횟수)번째 site 요소의 href부분에서 .html을 없앤다
		}
	}
	if(himode==false){ //만약 himode가 false라면
		for (var i=0; i<site.length; i++){ //배열 site의 길이만큼 반복
			site[i].href=site[i].href.replace('https://hiyobi.me','https://hitomi.la'); //대충 위에꺼 반대로
			site[i].href=site[i].href+'.html' //(반복문이 반복된 횟수)번째 a태그 요소의 href뒤에 .html을 추가한다
		}
	}
}
function verify() { //verify 함수 선언, 이 함수는 사이트가 시작될때 실행된다
	var request = new XMLHttpRequest(); //XMlHttpRequest 사용
	request.onreadystatechange = function() {
		if(this.status == 200 && this.readyState == this.DONE) { //밑에 GET요청이 잘 되었다면
			var ip=request.responseText; //GET요청으로 가져온 문자열을 변수 ip에 담는다( {'ip':'대충 ip'} 이런식의 json 포맷임)
			if(blockip.includes(JSON.parse(ip).ip)){ //만약 상수 blockip 안에 현재 접속중인 유저의 ip가 있다면,
				let conf = document.getElementById('conf'); //id가 conf인 요소를 변수 conf에 저장한다
				conf.style.display='block'; //conf의 css를 display:block; 으로 바꾼다
				conf.innerHTML='이 사이트는 폐쇄되었습니다.<br>나중에 더 좋은 모습으로<br>찾아뵙겠습니다.'; //conf의 안쪽 부분을 저기있는 걸로 바꾼다
			}
		}
	}
	request.open("GET", 'https://api.ipify.org?format=json'); //XMlHttpRequest GET으로 https://api.ipify.org?format=json 의 내용(접속자의 ip주소)를 가져온다
	request.send(null); //위의 open 요청을 보낸다
}
var Target = document.getElementById("clock");
var Target_apm = document.getElementById("apm");
function clock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var AmPm ="AM";
    if(hours > 12){   
        var AmPm ="PM";
        hours %= 12;
    }
    Target.innerText = 
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    Target_apm.innerText = `${AmPm}`;
}
clock();
setInterval(clock, 1000); // 1초마다 실행
function start() {
	setTimeout (function() {
		document.getElementById("conf").style.display='none';
	},250)
}
	function hiyobi(){
	var site=document.querySelectorAll('.main a');
	var himode=document.getElementById('himode').checked;
	if(himode==true){
		for (var i=0; i<site.length; i++){
			site[i].href=site[i].href.replace('https://hitomi.la','https://hiyobi.me');
			site[i].href=site[i].href.replace('.html','');
		}
	}
	if(himode==false){
		for (var i=0; i<site.length; i++){
			site[i].href=site[i].href.replace('https://hiyobi.me','https://hitomi.la');
			site[i].href=site[i].href+'.html'
		}
	}
}
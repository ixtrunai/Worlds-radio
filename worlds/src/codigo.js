new Twitch.Embed("twitch-embed", {
	channel: "ibai",  //introduce aqui el canal que quieres
	layout: "video"
});

//Si movemos el navegador entre pantallas o si cambiamos entre normal y fullscreen
$(window).resize(function() {
	windowResize();
});


//Recolocar stream de twitch segun resolucion y situacion
function windowResize(){
	if ( screen.width <= 1366 ){
		if(document.fullscreen){
			if($("#twitch-chat").is(":visible")){
				fs_chat_768();
			}
			else{
				fs_nochat_768();
			}
		}
		else{
			if($("#twitch-chat").is(":visible")){
				nofs_chat_768();
			}
			else{
				nofs_nochat_768();
			}
		}
	}
	else if ( screen.width <= 1440 ){
		if(document.fullscreen){
			if($("#twitch-chat").is(":visible")){
				fs_chat_900();
			}
			else{
				fs_nochat_900();
			}
		}
		else{
			if($("#twitch-chat").is(":visible")){
				nofs_chat_900();
			}
			else{
				nofs_nochat_900();
			}
		}
	}
	else if (screen.width <= 1920){
		if(document.fullscreen){
			if($("#twitch-chat").is(":visible")){
				fs_chat_1080();
			}
			else{
				fs_nochat_1080();
			}
		}
		else{
			if($("#twitch-chat").is(":visible")){
				nofs_chat_1080();
			}
			else{
				nofs_nochat_1080();
			}
		}
	}
	else{
		if(document.fullscreen){
			if($("#twitch-chat").is(":visible")){
				fs_chat_2k();
			}
			else{
				fs_nochat_2k();
			}
		}
		else{
			if($("#twitch-chat").is(":visible")){
				nofs_chat_2k();
			}
			else{
				nofs_nochat_2k();
			}
		}
	}
	
}

let elem = document.documentElement;

//al poner a pantalla completa
function setCloseAtrrs(){
	$("#fscreen").attr("onclick", "closeFullscreen()");
	$("#fscreen").attr("src", "images/nofullscreen.png");
	$("#fscreen").attr("title", "Salir del modo de pantalla completa");
}

//al poner a pantalla normal
function setOpenAttrs(){
	$("#fscreen").attr("onclick", "openFullscreen()");
	$("#fscreen").attr("src", "images/fullscreen.png");
	$("#fscreen").attr("title", "Entrar en modo de pantalla completa");
}

//Abrir a pantalla completa
function openFullscreen() {
  if (elem.requestFullscreen) {
	elem.requestFullscreen();
	setCloseAtrrs();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
	elem.mozRequestFullScreen();
	setCloseAtrrs();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
	elem.webkitRequestFullscreen();
	setCloseAtrrs();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
	elem.msRequestFullscreen();
	setCloseAtrrs();
  }
}

//Cerrar pantalla completa
function closeFullscreen() {
  if (document.exitFullscreen) {
	document.exitFullscreen();
	setOpenAttrs();
  } else if (document.mozCancelFullScreen) { /* Firefox */
	document.mozCancelFullScreen();
	setOpenAttrs();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
	document.webkitExitFullscreen();
	setOpenAttrs();
  } else if (document.msExitFullscreen) { /* IE/Edge */
	document.msExitFullscreen();
	setOpenAttrs();
  }
}

//Menu
//$("#botones").fadeTo(0,0);  (ocultar por defecto?)

$("#botones").mouseenter(function(){
	 $(this).fadeTo(300,1);
})

$("#botones").mouseleave(function(){
	 $(this).fadeTo(300,0);
})

function toggleChat(){
	//Ocultar chat
	if($("#twitch-chat").is(":visible")){ 
		$("#twitch-chat").hide();
		$("#youtube").css("width", "100%");
		
		//recolocar stream twitch
		windowResize();					
	}
	//Mostrar chat
	else{	
		$("#twitch-chat").show();
		$("#youtube").css("width", "80%");
		
		//recolocar stream twitch
		windowResize();
	}
}

function toggleStream(){
	if($("#twitch-embed").css("visibility")=="visible"){
		$("#twitch-embed").css("visibility", "hidden");
	}
	else{
		$("#twitch-embed").css("visibility", "visible");
	}
}

//CONFIGS 2K (2560x1440)
function fs_chat_2k(){
	$("#twitch-embed").css({"bottom": "145px", "right": "790px"});
	$("#twitch-embed iframe").css({"width": "350px", "height": "260px"});
}

function fs_nochat_2k(){
	$("#twitch-embed").css({"bottom": "0px", "right": "350px"});
	$("#twitch-embed iframe").css({"width": "430px", "height": "320px"});
}

function nofs_chat_2k(){
	$("#twitch-embed").css({"bottom": "70px", "right": "790px"});
	$("#twitch-embed iframe").css({"width": "350px", "height": "260px"});
}

function nofs_nochat_2k(){
	$("#twitch-embed").css({"bottom": "0px", "right": "440px"});
	$("#twitch-embed iframe").css({"width": "390px", "height": "290px"});
}

//CONFIGS 1080p (1920x1080)
function fs_chat_1080(){
	$("#twitch-embed").css({"bottom": "110px", "right": "595px"});
	$("#twitch-embed iframe").css({"width": "260px", "height": "190px"});
}

function fs_nochat_1080(){
	$("#twitch-embed").css({"bottom": "0px", "right": "260px"});
	$("#twitch-embed iframe").css({"width": "330px", "height": "240px"});
}

function nofs_chat_1080(){
	$("#twitch-embed").css({"bottom": "30px", "right": "595px"});
	$("#twitch-embed iframe").css({"width": "260px", "height": "200px"});
}

function nofs_nochat_1080(){
	$("#twitch-embed").css({"bottom": "0px", "right": "355px"});
	$("#twitch-embed iframe").css({"width": "280px", "height": "210px"});
}

//CONFIGS 900p (1440x900)
function fs_chat_900(){
	$("#twitch-embed").css({"bottom": "110px", "right": "445px"});
	$("#twitch-embed iframe").css({"width": "195px", "height": "160px"});
}

function fs_nochat_900(){
	$("#twitch-embed").css({"bottom": "40px", "right": "195px"});
	$("#twitch-embed iframe").css({"width": "250px", "height": "190px"});
}

function nofs_chat_900(){
	$("#twitch-embed").css({"bottom": "50px", "right": "445px"});
	$("#twitch-embed iframe").css({"width": "195px", "height": "155px"});
}

function nofs_nochat_900(){
	$("#twitch-embed").css({"bottom": "0px", "right": "230px"});
	$("#twitch-embed iframe").css({"width": "230px", "height": "170px"});
}

//CONFIGS 768p (1366x768)
function fs_chat_768(){
	$("#twitch-embed").css({"bottom": "60px", "right": "420px"});
	$("#twitch-embed iframe").css({"width": "185px", "height": "155px"});
}

function fs_nochat_768(){
	$("#twitch-embed").css({"bottom": "0px", "right": "185px"});
	$("#twitch-embed iframe").css({"width": "230px", "height": "175px"});
}

function nofs_chat_768(){
	$("#twitch-embed").css({"bottom": "0px", "right": "420px"});
	$("#twitch-embed iframe").css({"width": "185px", "height": "145px"});
}

function nofs_nochat_768(){
	$("#twitch-embed").css({"bottom": "0px", "right": "280px"});
	$("#twitch-embed iframe").css({"width": "190px", "height": "140px"});
}




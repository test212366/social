<script lang="ts">
	 

	

</script>

<template> 
	 
	<Header />
	<WebGL />
	<Welc />
	<Login />
	<Registration />
	<Chats />
	<Messenger />
	<Menu/>
	<Loading/>

</template>



<!-- // Ваш файл сценария
if (navigator.userAgent.match(/iPhone/i)) {
  // Замена 1 на 0.9 или другого значения по вашему выбору
  document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }, false);
} -->



<style  >
	@font-face {
		font-weight: 400;
		font-family: Roobert;
		src: url("../assets/fonts/Roobert-Regular.otf");
	}
	@font-face {
		font-weight: 500;
		font-family: Roobert;
		src: url("../assets/fonts/Roobert-Medium.otf");
	}
	@font-face {
		font-weight: 600;
		font-family: Roobert;
		src: url("../assets/fonts/Roobert-SemiBold.otf");
	}
	@font-face {
		font-weight: 800;
		font-family: Roobert;
		src: url("../assets/fonts/Roobert-Bold.otf");
	}
	@font-face {
		font-weight: 300;
		font-family: Roobert;
		src: url("../assets/fonts/Roobert-Light.otf");
	}
	html, body {
		touch-action: manipulation;
	}
	#__nuxt > div {
		/* width: 414px; */
		overflow: hidden;
	}
	body {
		overscroll-behavior: none;
		color: #fff;
		overflow: hidden;
		background-color:  #000;
		/* background: red; */
		touch-action: none;
	}
	* {
		font-family: Roobert;
		-ms-user-select: none; 
		-moz-user-select: none; 
		-webkit-user-select: none; 
		user-select: none; 
		margin: 0;
		padding: 0;
		
	}
	 
	canvas {
		display: block;
	}


</style>
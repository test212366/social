<script lang="ts">
	import {usePageStore} from '~/stores/index'

	export default {
		computed: {
			store() {
				return usePageStore()
			}
		},
		methods: {
			closeMenu() {
				this.store.setMenuOpen()
			},
			exitAccount() {
				if(process.client) {
					localStorage.clear()
					window.location.reload()
				}
			}
	}
}

</script>


<template>

	<section id="menu" :class="{ 'active__menu' : store.menuOpen }">
		<svg @click="closeMenu" class="menu__close" height="20px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="20px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg>
		<div class="menu__your-account">
			<img width="65" height="65" src="../static/avatar.jpg" alt="">
			<div>
				<p>Your Account</p>
				<p>{{store.user ? store.user.userName : ''}}</p>


			</div>
			
		</div>


		<button @click="exitAccount" class="menu__exit-account">Exit Account</button>

	</section>
	

 
</template>


<style>	

	.active__menu {
		right: 0  !important;
		visibility: visible !important;
		opacity: 1 !important;
	}
	.menu__close {
		fill: #727272;
		transition: .3s ease all;
		position: absolute;
		right: 77px;
		top: 60px;

	}
	.menu__close:hover {
		fill: #fff;
	}
	.menu__exit-account {
		position: absolute;
		bottom: 20px;
		left: 50%;
		background-color: transparent;
		color: #fff;
		border: 1px solid #727272;
		font-size: 12px;
		/* border: none; */
		border-radius: 25px;
		padding: 15px 40px;
		transform: translateX(-50%);
	}
	.menu__your-account img {
		border-radius: 50%;
		margin-right: 20px;
	}
	.menu__your-account p:first-child {
		font-size: 13px;
		color: #a3a3a3;
		margin-bottom: 8px;
	}
	.menu__your-account p {
		/* font-size: 15px; */
		font-weight: 500;

	}
	.menu__your-account {
		margin-top: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#menu {
		transition: .8s ease all;
		/* transform: translateX(100%); */
		visibility: hidden;
		padding: 30px;
		backdrop-filter: blur(2px);
		border-radius: 20px 0 0 20px;
		opacity: 0;
		bottom: 0;
		width: 700px;
		background-color: #00000047;
		position: fixed;
		right: -100%;
		top: 0;
		z-index: 11;
	}
	@media screen and (max-width: 1200px) {
		#menu {
			width: 550px ;
		}
	}
	@media screen and (max-width: 900px) {
		.menu__close {
			right: 40px;
		}
		#menu {
			width: 400px ;
		}
	}
	@media screen and (max-width: 550px) {
		.menu__close {
			right: 40px;
		}
		#menu {
			width: 100% ;
			border-radius: none;
			padding: 0;
		}
		.menu__your-account img {
			height: 50px;
			width: 50px;
		}
		.menu__close {
			top: 40px;
			right: 23px;
		}
		.menu__your-account img {
			margin-right: 10px;
		}
	}
	@media screen and (max-width: 390px) {
		.menu__your-account {
			justify-content: start;
			margin-left: 20px;
		}
		 
		 
	}
</style>
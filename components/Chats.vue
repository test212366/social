<template> 
	<!-- @ts-ignore -->
	<section id="chats" :class="{ 'active__chats' :  store.user  && store.user.isActivated && store.change && store.currentPage === 3}">
		<div class="registration__inputs">

			<input type="text" placeholder="Find User..">
			<svg class="search" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="27px" height="27px"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/></svg>
		</div>
		<ul class="chats__amount">
			<Chat />
			<Chat />
			<Chat />
			<Chat />
			<Chat />
			<Chat />
			<Chat />
			<Chat />
			<Chat />
			<Chat />
			<Chat />
			<Chat />
			<Chat />
			<Chat />


		</ul>



	</section>
	

</template>


<script lang="ts">
	import {usePageStore} from '~/stores/index'

 
 	export default {
		computed: {
			store() {
				return usePageStore()
			}
		}
	}
</script>


<style scoped>

	.search {
		position: absolute;
		right: 0;
		top: 11px;
		transition: .3s ease all;
		fill: #767575;
	}
	.search:hover {
		fill: #fff;
	}
	.registration__inputs {
		display: none;
	}
	.chats__amount {
		overflow-y: scroll;
		/* height: 65vh;  */

		height:  calc(100vh - 33% );

		padding-right: 10px;
		padding-bottom:50px;
	}
	.chats__amount::-webkit-scrollbar {
		width: 7px;
		background-color: #3737373a;
		border-radius: 10px;
	}
	.chats__amount::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #75757515;
	}
	#chats input {
		width: 100% !important;
		margin-bottom: 100px;
	}
	#chats {
		
		visibility: hidden;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		top: 0;
		/* z-index: -20; */
		/* opacity: 0; */
		transition: 1s ease all;
		position: fixed;
		left: 50%;
		/* transform: translateX(-50%); */
		transform: translateX(-400%);
		bottom: 0;
	}
	#chats li {
		list-style: none;
	}
	
	@media screen and (max-width: 790px) {
		.chats__amount {
			height:  calc(100vh - 35% );
		}
		.chats__amount::-webkit-scrollbar {
			width: 3px;
			background-color: #3737373a;
			border-radius: 10px;
		}
		.chats__amount::-webkit-scrollbar-thumb {
			border-radius: 10px;
			background-color: #75757515;
		}
	}
 
</style>
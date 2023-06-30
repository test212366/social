
<script lang="ts">
	import {usePageStore} from '~/stores/index'

 	export default {
		computed: {
			store() {
				return usePageStore()
			}
		},
		methods: {
			openMessanger() {
				if(this.store.animationText) return

				this.store.changeFalse()
				this.store.increment('NIKITA ZMAN')
				this.store.changeTrue()
				this.store.hideChatsLetters()
			}
		}
	}

</script>

<template> 
	<li @click="openMessanger" class="chat__item">
				<img width="60" height="60" src="../static/avatar.jpg" alt="chat__user-img">
				<div class="chat__description">
					<p class="chat__description-time">Mon, 12:32</p>
					<p>Nick Carrow</p>
					<p class="chat__description-message">Hi there what's app? i really appreciated you! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, consectetur a animi molestias recusandae esse provident. Blanditiis iusto voluptatem sit accusantium reiciendis animi incidunt dolore. Porro a rerum aliquam ad.</p>
				</div>
			
	</li>

</template>


<style scoped>
	.chat__description-message {
		font-size: 12px;
		margin-top: 5px;
		color: #bfbfbf;
		text-overflow: ellipsis; 
		white-space: nowrap;
		width: 370px;
		overflow: hidden;
	}
	.chat__description-time {
		position: absolute;
		right: 0;
		font-size: 11px;
		
		top: 15px;
	}
	.chat__description {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
	}
	.chat__item {
		margin-top: 15px;
		display: flex;
		justify-content: space-between;
		width: 450px;
	}
	.chat__item img {
		border-radius: 50%;
		opacity: 0.8;

	}
	@media screen and (max-width: 490px) {
		.chat__item {
			width: 370px;
		}
		.chat__description-message {
			width: 295px;
		}
	}
	@media screen and (max-width: 390px) {
		.chat__item {
			width: 340px;
		}
		.chat__description-message {
			width: 265px;
		}
	}
	@media screen and (max-width: 370px) {
		.chat__item {
			width: 280px;
		}
		.chat__description-message {
			width: 205px;
		}
	}

</style>
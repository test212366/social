<script lang="ts">


</script>


<template> 
		<div class="message">
				<p class="massage__time">12:33</p>
				<p class="message__target">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, aut sapiente repellat assumenda sequi ducimus omnis est molestiae accusamus quasi. Pariatur facilis quod qui saepe quaerat aliquam totam minus cupiditate?</p>
				<p class="message__who">:You</p>

			</div>


</template>


<style scoped>
	 
	.massage__time {
		position: absolute;
		right: 0;
		top: 0;
		font-size: 13px;
		color: #9e9e9e;
	}
	.message__who {
		position: absolute;
		font-size: 13px;
		bottom: 0px;
		color: #9e9e9e;
		right: 0;
	}
	.message__target {
		text-align: end;
		margin-right: 42px;
		max-width: 600px;
		font-size: 13px;
		line-height: 18px;
	}
	.message {
		margin-bottom: 40px;
		position: relative;
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}
	@media screen and (max-width: 880px) {
		.message__target {
			max-width: 500px;
		}
	}
	@media screen and (max-width: 770px) {
		.message__target {
			max-width: 400px;
			font-size: 11px;
		}
		.massage__time {
			font-size: 11px;
		}
		.message__who {
			font-size: 11px;
		}
	}
	@media screen and (max-width: 560px) {
		.massage__time {
			top: unset;
			bottom: 22px !important;
		}
		.message__target {
			max-width: 300px;
		}
	}
	@media screen and (max-width: 450px) {
		.message__target {
			max-width: 260px;
		}
	}
	@media screen and (max-width: 400px) {
		.message__target {
			max-width: 220px;
			margin-right: 34px;
		}
	}
 
</style>
<script lang="ts">

	import {usePageStore} from '~/stores/index'

	export default {
		data() {
			return {
				email: '',
				password: '',
				loginSucced: false
			}
		},
		computed: {
			store() {
				return usePageStore()
			}
		},
		methods: {
			async backRegister() {
				if(this.store.animationText) return
				if(this.email.length > 5 && this.email.length <= 25 && this.password.length <= 10 && this.password.length >= 5) {
					try {
						this.store.setLoading()
						
						const {data} = await useFetch('/api/login', {
							headers: {
								'Content-Type': 'application/json',
							},
							method: 'POST',
							body: JSON.stringify({
								email: this.email,
								password: this.password,
							})
						})
						//@ts-ignore
						const datai = data.value.login
						if(datai.accessToken) {
							localStorage.setItem('activationLink', datai.user.activationLink)
							localStorage.setItem('token', datai.accessToken)
						}
					 
						console.log(datai)
						this.store.setLoading()
						if(datai.accessToken) {
							this.loginSucced = true
						 
							this.store.setUser(datai.user)
							this.setChats()
						} 

					} catch (error) {
						console.log(error)
					}
				 
					return
				}
				this.store.changeFalse()
				this.store.decrement('REGISTER')
				this.store.changeTrue()
				this.store.hideLettersLogin()
			},
			setChats() {
				if(this.store.animationText) return
				this.store.changeFalse()
				this.store.increment('CHATS')
				this.store.changeTrue()
				this.store.eraseRegLogLetters()
			}
		}
	}
</script>

<template>
	<section id="login" :class="{'login__active' : store.change && store.currentPage === 2}">

		 
		<div class="registration__inputs">
				<Loader/>
				<input v-model="email"  type="email" placeholder="Enter your email..">
				<input v-model="password"  type="password" placeholder="Enter your password..">
				<div class="registration__or">
					<hr>
					<p>OR</p>
					<hr>
				</div>
				
				<GoogleButton/>

			</div>

			<button @click="backRegister" id="regstration__button" :class="{ 'hide__reg-button' : store.loading || loginSucced }">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><circle vector-effect="non-scaling-stroke" cx="50" cy="50" r="50" stroke-dasharray="0 22.43994752564138" stroke-linecap="round" stroke-width="2"></circle></svg>
				 <!-- REGISTER -->
				
				  <p v-if="!(email.length > 5 && email.length <= 25 && password.length <= 10 && password.length >= 5)">
					Back Register
				 </p>
				 <p v-else>
					Login

				 </p>
			</button>
	</section>
	

</template>


<style>
	.login__active {
		top: 300px !important;
		opacity: 1 !important;
		visibility: visible !important;
	}
	#login {
		visibility: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: absolute;
		opacity: 0;
		left: 50%;
		transform: translateX(-50%);
		top: 1000px;
		transition: 2s ease all;
	}


</style>


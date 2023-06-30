import { defineStore } from "pinia";
import { WebGLScene } from '../class/WebGL'
import gsap from 'gsap'

let user:any = null

const checkUserLocal = async () => {
	if(process.client && localStorage.getItem('token')) {
		const {data} = await useFetch('/api/loginLocalStorage', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body:  localStorage.getItem('token')
		})
							//@ts-ignore
		const datai:any = data.value
	
		user = datai.user
		if(datai.accessToken) {
			localStorage.setItem('token', datai.accessToken)
			localStorage.setItem('activationLink', datai.user.activationLink)
	
		}  
	
		
		
	}
}
checkUserLocal()

export const usePageStore = defineStore('counter', {
	state: () => ({
		currentPage:  0,
		change: false,
		currentPageTitle: 'WELCOME',
		prevCurrentPage: 'WELCOME',
		webGL: null,
		startAnimationHeader: false,
		menuOpen: false,
		loading: false,
		animationText: false,
		user: null
	
	}),
	actions: {
		checkUser() {
			if(user) {
				this.changeFalse()
				this.currentPage = 2
				this.user = user
				this.increment('CHATS')

				this.removeLettersWebGL() 
				this.changeTrue()
			 
			}
		},
		loginGoogle() {
			this.currentPage = 2
			this.increment('CHATS')

		},
		setUser(user:any) {
			this.user = user
		},
		setAnimationText() {
			this.animationText = !this.animationText
		},
		setLoading() {
			this.loading = !this.loading
		},
		setMenuOpen() {
			this.menuOpen = !this.menuOpen
		},
		confirmAccount() {
				//@ts-ignore
			gsap.to(this.webGL.materialText.uniforms.uProgress1, {
				duration: 2,
				value: 0,
			//@ts-ignore
			}).then(() => 	this.webGL.confirmAccount())
		 
			 
		},
		increment(namePage: string) {
			this.currentPage++
			
			this.changePage(namePage)
		},
		changePage(namePage: string) {
			this.prevCurrentPage = this.currentPageTitle
			this.currentPageTitle = namePage
			this.startAnimationHeader = true
			if(this.currentPage === 1) this.removeLettersWebGL() 
			setTimeout(() => {
				this.startAnimationHeader = false
				this.prevCurrentPage = ''
			} , 2000)

		},
	
		decrement(namePage: string) {
			this.currentPage--
			this.changePage(namePage)

		},
		changeTrue() {
			setTimeout(() => this.change = true, 1000)
		},
		changeFalse() {
			this.change = false
		},
		createWebGL(dom:any) {
			//@ts-ignore
			this.webGL = new WebGLScene({dom})
		},
		removeLettersWebGL() {
			if(this.user) {
			
				this.eraseRegLogLetters()
			} else {
				//@ts-ignore
							
				gsap.to(this.webGL.materialText.uniforms.uProgress1, {
					duration: 2,
					value: 0,
				}).then(() => this.addLettersRegister())
			}
			 
		},
		eraseRegLogLetters () {
			this.setAnimationText()
			//@ts-ignore
			gsap.to(this.webGL.materialText.uniforms.uProgress1, {
				duration: 2,
				value: 0,
			}).then(() => {
				//@ts-ignore

				if(this.user) this.webGL.removeFletters()
				//@ts-ignore
				this.webGL.eraseRegLogLetters(!this.user.isActivated, this.user.userName)

				setTimeout(() => {
					this.setAnimationText()
				}, 7000)
		 

			} )
 
		},
		addLettersRegister() {
			this.setAnimationText()
			//@ts-ignore

			this.webGL.addRegisterText()
			setTimeout(() => {
				this.setAnimationText()
			}, 3000)
			
		},
		hideLettersLogin() {
			//@ts-ignore
		
			this.webGL.hideLettersLogin()
			
	
		},
		showLettersRegister() {
		
			//@ts-ignore

			this.webGL.showLettersRegister()
	
		},
		hideLettersRegister() {
			//@ts-ignore
			this.setAnimationText()
	 
			//@ts-ignore

			this.webGL.hideLettersRegister()


			setTimeout(() => {
				this.setAnimationText()
			}, 5000)
			// this.setAnimationText()

		},
		hideChatsLetters() {
			//@ts-ignore
			gsap.to(this.webGL.materialText.uniforms.uProgress1, {
				duration: 2,
				value: 0,
			//@ts-ignore
			}).then(() =>  {
			//@ts-ignore

				this.webGL.hideChatsLetters()
		
			})
	 

		},
		backChat() {
				//@ts-ignore
				gsap.to(this.webGL.materialText.uniforms.uProgress1, {
					duration: 2,
					value: 0,
				//@ts-ignore
				}).then(() => 	this.webGL.backChat())
		}

	}
})
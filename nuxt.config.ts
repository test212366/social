// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';
import glsl from 'vite-plugin-glsl'

export default defineNuxtConfig({
	ssr: true,
  devtools: { enabled: true },
	build: {
		transpile: [
			'three'
		]
	},
	googleSignIn: {
		clientId: '1094366230693-o4p7m2jepb1neslgl7593k7dqea96s4s.apps.googleusercontent.com',
	},
	modules: [
		'@pinia/nuxt',
		'nuxt-vue3-google-signin',
		[
			'@vee-validate/nuxt',
			{
			  // disable or enable auto imports
			  autoImports: true,
			  // Use different names for components
			  componentNames: {
				 Form: 'VeeForm',
				 Field: 'VeeField',
				 FieldArray: 'VeeFieldArray',
				 ErrorMessage: 'VeeErrorMessage',
			  },
			},
		],
	  
	],
	//@ts-ignore
	// serverMiddleware: [
	// 	{ path: '/api/activate', handler: './server/server-middleware/rest.ts' }
	//  ],
	//@ts-ignore
	head: {
		
		meta: [
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' }
		],
		// ...
	 },
	vite: {
		plugins: [glsl()],
	},
   
})

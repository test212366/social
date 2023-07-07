// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';
import glsl from 'vite-plugin-glsl'

 

export default defineNuxtConfig({


  devtools: { enabled: true },
	build: {
		transpile: [
			'three'
		]
	},
	googleSignIn: {
		clientId: '1094366230693-o4p7m2jepb1neslgl7593k7dqea96s4s.apps.googleusercontent.com',
	},
	//@ts-ignore
	serverMiddleware: [
		{path: '/api', handler: '~/server/utils/SendMail'}	
	],
	runtimeConfig: {
		mailerUser: '',
		mailerPass: '',
		mailerLog: '',  
  },
	modules: [
		'nuxt-mailer',
		// '@nuxtjs/axios',
	 
		// ['nuxt-mail', {
		// 	smtp: {
		// 	  service: 'gmail',
		// 	  auth: {
		// 		 user: 'nzoxoriginal@gmail.com',
		// 		 pass: 'pmxy qbpa gryi aamo',
		// 	  },
		// 	},
		//  }],
		// ['nuxt-mail', {
		// 	message: {
		// 		to: ' ',
		// 	},
		// 	smtp: {
		// 	host: 'smtp.gmail.com',
		// 	port: 465,
		// 	auth: {
		// 		user: 'nzoxoriginal@gmail.com',
		// 		pass: 'pmxy qbpa gryi aamo'
		// 	},
		// 	},
		// }],
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
	// runtimeConfig: {
	// 	MAILHOST: 'smtp.ethereal.email',
	// 	MAILPORT: '587',
	// 	MAILUSER: 'nzoxoriginal@gmail.com',
	// 	MAILPASSWORD: 'pmxy qbpa gryi aamo',
	// 	// CONTACTMAIL: 'nzoxoriginal@gmail.com'
	// },
	//@ts-ignore
	// serverMiddleware: [
	// 	{ path: '/api/activate', handler: './server/server-middleware/rest.ts' }
	//  ],
	//@ts-ignore
	head: {
		title: 'Sauzge',
		meta: [
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' }
		],
		// ...
	 },
	vite: {
		plugins: [glsl()],
	},
   
})

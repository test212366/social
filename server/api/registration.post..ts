import db from '../db'
import UserModel from '../models/userModel'
import mailSend from '../utils/SendMail'
import tokenService from '../utils/Token'
import UserDto from '../models/userDto'
// import bcrypt from 'bcryptjs'
//@ts-ignore
import bcrypt from 'bcrypt';
//@ts-ignore
import { v4 as uuidv4 } from 'uuid';

export default defineEventHandler(async (event) => {
	await db()	

	const {email, password, userName} = await readBody(event)
	const candidate = await UserModel.findOne({email})
  //@ts-ignore
	// console.log(candidate.email)
	if (candidate) return { error: "email уже используется" }
   const usedName = await UserModel.findOne({ userName })
   if (usedName) return { error: 'имя пользователя уже используется' }
   const hashPassword = await bcrypt.hash(password, 3)
		
   const activationLink = uuidv4()
   const user = await UserModel.create({
      email, userName, password: hashPassword, activationLink
      })

	await mailSend.sendActivationEmail(email, `${event.req.headers.host}/activate/${activationLink}`)
   const userDto = new UserDto(user),
 	 	tokens = tokenService.generateTokens({...userDto})
   await tokenService.saveToken(userDto.id, tokens.refreshToken)
   
	return {
		registration: {
				...tokens,
				user
			}
         
      }
 })
 
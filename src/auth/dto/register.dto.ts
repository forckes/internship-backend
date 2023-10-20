import { IsEmail, IsPhoneNumber, IsString, MinLength } from 'class-validator'

export class RegisterDto {
	@IsEmail()
	email: string

	@MinLength(6, {
		message: 'Password must be at least 6 characters long'
	})
	@IsString()
	password: string

	@IsString()
	name: string

	@IsPhoneNumber()
	@MinLength(7, {
		message: 'Phone number must be at least 7 characters long'
	})
	phone: string
}

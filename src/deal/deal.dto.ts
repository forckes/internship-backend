import { ArrayMinSize, IsArray, IsOptional, IsString } from 'class-validator'

interface IOption {
	value: string
	label?: string
}

export class DealDto {
	@IsString()
	title: string

	@IsOptional()
	@IsString()
	description: string

	@ArrayMinSize(1)
	@IsArray()
	@IsString({ each: true })
	images: string[]

	@ArrayMinSize(1)
	@IsArray()
	options: IOption[]
}

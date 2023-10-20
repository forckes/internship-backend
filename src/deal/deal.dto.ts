import { ArrayMinSize, IsArray, IsOptional, IsString } from 'class-validator'

export class ProductDto {
	@IsString()
	title: string

	@IsOptional()
	@IsString()
	description: string

	@ArrayMinSize(1)
	@IsArray()
	@IsString({ each: true })
	images: string[]
}

import {
	Controller,
	Get,
	Param,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { DealService } from './deal.service'

@Controller('deal')
export class DealController {
	constructor(private readonly dealService: DealService) {}

	@UsePipes(new ValidationPipe())
	@Get()
	async getAll() {
		return this.dealService.getAll()
	}

	@Get(':id')
	async getProduct(@Param('id') id: string) {
		return this.dealService.byId(+id)
	}
}

import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { returnDealObject } from './return-deal.object'

@Injectable()
export class DealService {
	constructor(private prisma: PrismaService) {}
	async getAll() {
		return this.prisma.deal.findMany({
			select: returnDealObject
		})
	}
	async byId(id: number) {
		const deal = await this.prisma.deal.findUnique({
			where: {
				id
			},
			select: returnDealObject
		})

		if (!deal) {
			throw new NotFoundException('Deal not found')
		}

		return deal
	}
}

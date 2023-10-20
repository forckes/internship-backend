import { Prisma } from '@prisma/client'

export const returnDealObject: Prisma.DealSelect = {
	id: true,
	title: true,
	images: true,
	description: true,
	options: true
}

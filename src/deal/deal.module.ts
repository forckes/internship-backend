import { Module } from '@nestjs/common'
import { DealService } from './deal.service'
import { DealController } from './deal.controller'
import { PrismaService } from 'src/prisma.service'

@Module({
	controllers: [DealController],
	providers: [DealService, PrismaService]
})
export class DealModule {}

import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
	getHello(): string {
		return 'Internship Test Task Backend. Created by forckes(Taras Lytvynenko)'
	}
}

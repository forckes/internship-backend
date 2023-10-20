import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { DealModule } from './deal/deal.module'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import * as appRootPath from 'app-root-path'

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: `${appRootPath}/uploads`,
			serveRoot: '/uploads'
		}),
		ConfigModule.forRoot(),

		AuthModule,
		UserModule,
		DealModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}

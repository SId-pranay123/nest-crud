import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import {WalletModule} from "./wallet/wallet.module";

@Module({
  imports: [AuthModule, UserModule, PrismaModule,WalletModule, ConfigModule.forRoot({isGlobal: true})],
})
export class AppModule {}

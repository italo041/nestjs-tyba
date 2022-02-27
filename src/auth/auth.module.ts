import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

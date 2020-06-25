import { Module } from '@nestjs/common'
import { AdminController } from './admin.controller'
import { UserController } from './user.controller'
import { AdminService } from './admin.service'

@Module({
  controllers: [AdminController, UserController],
  providers: [AdminService],
  exports: [AdminService],
})
export class AdminModule {}

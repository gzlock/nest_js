import { Module } from '@nestjs/common'
import { AdminModule } from './admin/admin.module'
import { AppModule } from './app/app.module'
import { IndexController } from './index.controller'

@Module({
  imports: [AdminModule, AppModule],
  // controllers: [IndexController],
})
export class IndexModule {}
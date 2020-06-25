import { Module } from '@nestjs/common'
import { AdminModule } from './admin/admin.module'
import { AppModule } from './app/app.module'

@Module({
  imports: [AdminModule, AppModule],
})
export class IndexModule {}
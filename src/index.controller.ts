import { Controller, Get } from '@nestjs/common'

@Controller('/')
export class IndexController {
  @Get('/')
  index (): string {
    return '/index.controller.ts'
  }
}
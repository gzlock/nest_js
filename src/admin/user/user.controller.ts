import { Controller, Get, Param } from '@nestjs/common'

@Controller('/admin/user')
export class UserController {
  @Get(':id')
  index (@Param('id') id: string): string {
    return `/admin/user/${id}`
  }
}

import { Controller, Get, Param } from '@nestjs/common'

@Controller('/app/user')
export class UserController {
  @Get(':id')
  index (@Param('id') id: string): string {
    return `/app/user/${id}`
  }
}

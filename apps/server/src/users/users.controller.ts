import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: Record<string, any>) {
    return this.usersService.login(loginDto.email, loginDto.password);
  }

  @Post('register')
  register(@Body() userData: any) {
    return this.usersService.createUser(userData);
  }
}

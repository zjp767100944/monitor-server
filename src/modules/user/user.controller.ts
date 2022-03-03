import {
  Body,
  Controller,
  createParamDecorator,
  ExecutionContext,
  HttpCode,
  Post,
} from '@nestjs/common';
import { LoginDto } from './dto/loginAccount.dto';
import { UserService } from './user.service';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @HttpCode(200)
  register(@Body() registerDto) {
    console.log(registerDto);
    return this.userService.register(registerDto.data);
  }

  @Post('login')
  @HttpCode(200)
  login(@Body() LoginDto) {
    return this.userService.loginAccount(LoginDto.data);
  }
}

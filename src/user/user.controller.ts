import { Controller, Get, Req, UseGuards, Patch , Body} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport'
import { Request } from 'express';
import { UserService } from './user.service';
import { EditUserDto } from './dto';

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('me')
    getMe(@Req() req: Request){
        return req.user;
    }

    @Patch()
    editUser(
      @Req() req: Request,
      @Body() dto: EditUserDto,
    ) {
    const userId: number = req.user['id'];
      return this.userService.editUser(userId, dto);
    }
}

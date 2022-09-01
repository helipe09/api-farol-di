import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, Req, UploadedFile } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import JwtAuthenticationGuard from 'src/authentication/jwt-authentication.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import RequestWithUser from 'src/authentication/requestWithUser.interface';
import { Update } from 'aws-sdk/clients/dynamodb';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('avatar')
  @UseGuards(JwtAuthenticationGuard)
  @UseInterceptors(FileInterceptor('file'))
  async addAvatar(@Req() request: RequestWithUser, @UploadedFile() file: Express.Multer.File) {
    return this.usersService.addAvatar(request.user.id, file.buffer, file.originalname)
  }

  @Get('todos')
  async findAllUsers() {
    return this.usersService.findAll()
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.usersService.getById(id)
  }

  @Patch(':id')
  async updateUser(@Param('id') id: number, @Body() updateUser: UpdateUserDto) {
    return this.usersService.update(id, updateUser)
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.usersService.remove(id)
  }
}

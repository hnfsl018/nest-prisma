import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrUpdateUserDto } from './user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  async create(@Body() data: CreateOrUpdateUserDto) {
    return await this.appService.create(data);
  }

  @Get()
  async findAll() {
    return await this.appService.findAll()
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return await this.appService.findOneById(id);
  }

  @Put(":id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() data: CreateOrUpdateUserDto) {
    return await this.appService.update(id, data);
  }

  @Delete(":id")
  async delete(@Param("id", ParseIntPipe) id: number) {
    return await this.appService.delete(id);
  }
}

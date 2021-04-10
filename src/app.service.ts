import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateOrUpdateUserDto } from './user.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) { }

  async create(user: CreateOrUpdateUserDto) {
    return await this.prisma.user.create({ data: user });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  };

  async findOneById(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id: id
      }
    });
  }

  async update(id: number, user: CreateOrUpdateUserDto) {
    return await this.prisma.user.update({
      data: {
        ...user,
        id: undefined
      },
      where: {
        id: id
      }
    });
  }

  async delete(id: number) {
    return await this.prisma.user.delete({ where: { id: id } });
  }


}

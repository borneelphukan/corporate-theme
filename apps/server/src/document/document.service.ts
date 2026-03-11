import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DocumentService {
  constructor(private prisma: PrismaService) {}

  async create(data: { document: string; fileName?: string; date: string; description?: string; category: string }) {
    return this.prisma.document.create({
      data: {
        ...data,
        date: new Date(data.date),
      },
    });
  }

  async findAll() {
    return this.prisma.document.findMany({
      orderBy: { date: 'desc' },
    });
  }

  async findOne(id: number) {
    const document = await this.prisma.document.findUnique({
      where: { id },
    });
    if (!document) {
      throw new NotFoundException(`Document with ID ${id} not found`);
    }
    return document;
  }

  async update(id: number, data: { document?: string; fileName?: string; date?: string; description?: string; category?: string }) {
    try {
      return await this.prisma.document.update({
        where: { id },
        data: {
          ...data,
          date: data.date ? new Date(data.date) : undefined,
        },
      });
    } catch (error) {
       throw new NotFoundException(`Document with ID ${id} not found`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.document.delete({
        where: { id },
      });
    } catch (error) {
       throw new NotFoundException(`Document with ID ${id} not found`);
    }
  }
}

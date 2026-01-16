import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
   private prisma = new PrismaClient();
   
    async findAll(userId: any) {
        return await this.prisma.product.findMany();
    }

    async create(createProductDto: CreateProductDto, userId: any) {
        const product = await this.prisma.product.create({
            data: createProductDto
        });
        return `This action adds a new product with ID ${product.id}`;
    }

    async findOne(id: number, userId: any) {
        const product = await this.prisma.product.findUnique({
            where: { id }
        });
        return product ? product.toString() : `Product with id ${id} not found`;
    }

    async update(id: number, updateProductDto: CreateProductDto, userId: any) {
        try {
            await this.prisma.product.update({
                where: { id },
                data: updateProductDto
            });
            return `This action updates a #${id} product`;
        } catch {
            return `Product with id ${id} not found`;
        }
    }

    async remove(id: number, userId: any) {
        try {
            await this.prisma.product.delete({
                where: { id }
            });
            return `This action removes a #${id} product`;
        } catch {
            return `Product with id ${id} not found`;
        }
    }
}

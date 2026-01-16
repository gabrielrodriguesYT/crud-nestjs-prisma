import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards, Request } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('products')
@UseGuards(JwtAuthGuard) 
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async findAll(@Request() req) {
    console.log('Usuário autenticado:', req.user);
    return this.productsService.findAll(req.user.id); 
  }

  @Post()
  async create(@Request() req, @Body() createProductDto: CreateProductDto) {
    console.log('Usuário autenticado:', req.user);
    return this.productsService.create(createProductDto, req.user.id);
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Request() req) {
    console.log('Usuário autenticado:', req.user);
    return this.productsService.findOne(+id, req.user.id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateProductDto: CreateProductDto, @Request() req) {
    console.log('Usuário autenticado:', req.user);
    return this.productsService.update(+id, updateProductDto, req.user.id);
  }

  @Delete(':id') 
  async remove(@Param('id') id: number, @Request() req) {
    console.log('Usuário autenticado:', req.user);
    return this.productsService.remove(+id, req.user.id);
  }
}

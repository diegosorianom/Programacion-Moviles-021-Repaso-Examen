import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @Post()
    create(@Body() body: { name: string }) {
        return this.categoriesService.create(body.name);
    }

    @Get()
    findAll() {
        return this.categoriesService.findALl();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.categoriesService.findOne(Number(id));
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.categoriesService.delete(Number(id));
    }
}

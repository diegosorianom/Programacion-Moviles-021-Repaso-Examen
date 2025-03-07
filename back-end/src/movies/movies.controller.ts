import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Post() 
    create(@Body() body: { title: string; description: string; categoryIds: number[] }) {
        return this.moviesService.create(body.title, body.description, body.categoryIds);
    }

    @Get()
    findAll() {
        return this.moviesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.moviesService.findOne(Number(id));
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.moviesService.delete(Number(id));
    }

    
}

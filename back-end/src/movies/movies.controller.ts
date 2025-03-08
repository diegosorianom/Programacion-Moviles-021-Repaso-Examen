import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Post() 
    // create(@Body() body: { title: string; description: string; categoryIds: number[] }) {
    //     return this.moviesService.create(body.title, body.description, body.categoryIds);
    // }

    create(@Body() createMovieDto: CreateMovieDto) {
        return this.moviesService.create(createMovieDto);
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

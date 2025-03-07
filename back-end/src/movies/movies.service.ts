import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities/category.entity';
import { Movie } from 'src/entities/movie.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movie)
        private readonly movieRepository: Repository<Movie>,
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) {}

    async create(title: string, description: string, categoryIds: number[]): Promise<Movie> {
        const categories = await this.categoryRepository.find({
            where: { id: In(categoryIds) },
        });

        if (categories.length !== categoryIds.length) {
            throw new Error ("No se han encontrado las categorias");
        }

        const movie = this.movieRepository.create({title, description, categories});
        
        return this.movieRepository.save(movie);
    }

    async findAll(): Promise<Movie[]> {
        return this.movieRepository.find({ relations: ['categories'] });
    }

    async findOne(id: number): Promise<Movie | null> {
        return this.movieRepository.findOne({ where: { id }, relations: ['categories'] });
    }

    async delete(id: number): Promise<void> {
        await this.movieRepository.delete(id);
    }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities/category.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
    constructor (
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) {}

    async create (name: string): Promise<Category> {
        const category = this.categoryRepository.create({ name });
        return this.categoryRepository.save(category);
    }

    async findALl(): Promise<Category[]> {
        return this.categoryRepository.find({ relations: ['movies'] });
    }

    async findOne(id: number): Promise<Category | null> {
        return this.categoryRepository.findOne({ where: { id } });
    }

    async delete(id: number): Promise<void> {
        await this.categoryRepository.delete(id);
    }
    
}

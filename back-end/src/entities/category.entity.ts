import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Movie } from "./movie.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column({ unique: true })
    name: string;

    @ManyToMany(() => Movie, (movie) => movie.categories)
    movies: Movie[];
}
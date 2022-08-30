import PublicFile from 'src/files/publicFiles.entity';
import User from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Permuta {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public title: string;

    @Column()
    public type: string;

    @Column()
    public description: string;

    @Column({ default: 'EM ANÁLISE' })
    public status: string;

    @JoinColumn()
    @ManyToOne(() => User, user => user.permutas, { eager: true, onDelete: 'CASCADE' })
    created_by: User

    @JoinColumn()
    @OneToMany(type => PublicFile, publicFile => publicFile.permuta, { eager: true })
    photos: PublicFile[]
}

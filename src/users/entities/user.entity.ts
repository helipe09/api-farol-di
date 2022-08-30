import { Exclude } from 'class-transformer';
import PublicFiles from 'src/files/publicFiles.entity';
import { Permuta } from 'src/permuta/entities/permuta.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
class User {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({ unique: true })
    public email?: string;

    @Column()
    public name: string;

    @Column()
    public surname: string;

    @JoinColumn()
    @OneToOne(
        () => PublicFiles,
        {
            eager: true,
            nullable: true
        }
    )
    public avatar?: PublicFiles;

    @Column({ nullable: true })
    public role: string;

    @Column({ nullable: true })
    public local: string;

    @Exclude({ toPlainOnly: true })
    @Column()
    public password: string;

    @OneToMany(() => Permuta, permuta => permuta.created_by, { eager: false, onDelete: 'CASCADE' })
    permutas: Permuta[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

export default User;

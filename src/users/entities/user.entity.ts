import PublicFiles from 'src/files/publicFiles.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

    @Column()
    public password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

export default User;

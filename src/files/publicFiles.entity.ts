import { Permuta } from 'src/permuta/entities/permuta.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class PublicFile {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public url: string;

    @Column()
    public key: string;

    @ManyToOne(type => Permuta, permuta => permuta.photos, { nullable: true })
    public permuta?: Permuta
}

export default PublicFile;
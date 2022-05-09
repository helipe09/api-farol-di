export class CreateUserDto {
    email?: string;
    name: string;
    surname: string;
    role: string;
    unity: string;
    password: string;
}

export default CreateUserDto;
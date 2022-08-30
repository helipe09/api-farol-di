export class CreateEmailDto {
    to: string;
    from?: string;
    templateId: string;
    dynamicTemplateData: {
        subject: string;
        name: string,
        token: string;
    }
}

export default CreateEmailDto;
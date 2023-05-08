import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest{
    name: string;
    description: string;

}

class CreateSpecificationUseCase {
    constructor(private speficationsRepository: ISpecificationsRepository) {}
    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.speficationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists");
        }

        this.speficationsRepository.create({
            name,
            description
        });
    }
}

export { CreateSpecificationUseCase };
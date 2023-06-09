import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            create_at: new Date()
        });
        this.specifications.push(specification);
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find((specification) => specification.name === name);

        if (!specification) {
            throw new Error("Category not found.");
        }
        
        return specification;
    }
}

export { SpecificationsRepository }
import { v4 as uuidV4} from "uuid";

class Category {
    // id?: string;
    // name: string | undefined;
    // description: string | undefined;
    // created_at: Date | undefined;
    id?: string = '';
    name: string = '';
    description: string = '';
    created_at: Date = new Date();

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}


export { Category };
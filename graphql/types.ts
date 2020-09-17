import { ItemsService } from "./service/item.service";

export class Types {

    getDefinition(): string {
        let typeDefs = `
            type Query 
        `;
        
        typeDefs += new ItemsService().configTypeDefs();

        return typeDefs;
    } 
} 
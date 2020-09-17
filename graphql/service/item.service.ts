import { Item } from "../model/item.model";
import itemList from "../../data/items.json";

export class ItemsService {

    items: Item[] = itemList.map((item: any) => {
        return new Item(item)
    });

    configTypeDefs() {
        let typeDefs = `
            type Item {
                id: ID,
                name: String,
                imagePath: String,
                price: Int,
                initialQty: Int
            } `;
        typeDefs += ` 
            extend type Query {
                items: [Item]
            }
        `;

        return typeDefs;
    }

    configResolvers(resolvers: any) {
        resolvers.Query.items = () => {
            return this.items;
        };

    }

}
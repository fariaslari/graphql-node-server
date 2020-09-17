import { ItemsService } from "./service/item.service";

export class Resolvers {

    getConfig() {
        let resolvers = {
            Query: {},
        };

        let itemService = new ItemsService();
        itemService.configResolvers(resolvers);

        return resolvers;
    }
}
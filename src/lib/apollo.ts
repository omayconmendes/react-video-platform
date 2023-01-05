import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl4um1q8j12rh01t7di94dufg/master',
    cache: new InMemoryCache()
})
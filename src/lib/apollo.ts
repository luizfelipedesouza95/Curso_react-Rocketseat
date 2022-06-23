import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r0w7t20eun01zceh0vaf3p/master',
    cache: new InMemoryCache()
})
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rr69bw1hbw01wb5ws1gsmy/master',
    cache: new InMemoryCache()
})
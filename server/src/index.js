const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const mocks = {
    Query: () => ({
        tracksForHome: () => [ ...new Array(6)],
    }),
    Track: () => ({
        id: () => 'track id 1',
        title: () => 'track title 1',
        thumbnail: () => 'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
        length: () => 30,
        modulesCount: () => 5,
        author: () => ({
            id: 'author id 1',
            name: 'author name 1',
            photo: 'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg'
        })
    })
}

const server = new ApolloServer({ typeDefs, mocks: mocks })

server.listen().then(() => {
    console.log('Server is running at localhost:4000');
}).catch((err) => {
    console.log('error', err);
})

const { gql } = require('apollo-server');

const typeDefs = gql`

    type Query {
        tracksForHome: [Track!]!
    }
    
    "a track contains modules that teach a specific concept"
    type Track {
        "id of the track"
        id: ID!
        "the track title"
        title: String!
        "the track thumbnail to display in the card for visual"
        thumbnail: String
        length: Int
        modulesCount: Int
        author: Author!
    }
    
    type Author {
        id: ID!
        name: String!
        photo: String
    }
`;

module.exports = typeDefs

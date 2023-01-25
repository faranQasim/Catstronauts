const { gql } = require('apollo-server');

const typeDefs = gql`

    type Query {
        tracksForHome: [Track!]!
        track(id: ID!): Track
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
        modules: [Module!]!
        numberOfViews: Int
        description: String
    }
    
    type Author {
        id: ID!
        name: String!
        photo: String
    }
    
    type Module {
        id: ID!
        title: String!
        length: Int
    }
`;

module.exports = typeDefs

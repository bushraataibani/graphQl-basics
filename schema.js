const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: HelloResponse
    human(id: String): [HumanResponse]
  }

  type HelloResponse {
    name: String
  }

  type HumanResponse {
    id: String
    name: String
    height(unit: String): Float
  }

  type Mutation {
    createReview(ep: String!, review: ReviewInput!): Review
  }

  type Review {
    stars: Int
    commentary: String
    episode: String
  }

  input ReviewInput {
    stars: Int
    commentary: String
  }
`;

module.exports = typeDefs;

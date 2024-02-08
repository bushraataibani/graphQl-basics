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
`;

module.exports = typeDefs;

const resolvers = {
  Query: {
    hello: () => ({
      name: "Hello World!",
    }),
    human: (_, { id }) => {
      const humans = [
        {
          id: "1000",
          name: "Luke Skywalker",
          height: [
            { unit: "FOOT", value: 6.8 },
            { unit: "INCH", value: 1.1 },
          ],
        },
        {
          id: "2000",
          name: "John Skywalker",
          height: [
            { unit: "FOOT", value: 5.5 },
            { unit: "INCH", value: 1.5 },
          ],
        },
      ];

      return id ? humans.filter((human) => human.id === id) : humans;
    },
  },
  HumanResponse: {
    height: (parent, { unit }) => {
      if (unit) {
        const heightObj = parent.height.find((item) => item.unit === unit);

        return heightObj ? heightObj.value : null;
      } else {
        return null;
      }
    },
  },

  Mutation: {
    createReview: (_, { ep, review }) => ({
      stars: review.stars,
      commentary: review.commentary,
      episode: ep,
    }),
  },
};

module.exports = resolvers;

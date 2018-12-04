export default {
    Query: {
      getBodyMesurements: (parent, { id }, { models }) => models.BodyMesurements.findOne({ where: { id } }),
      allBodyMesurementss: (parent, args, { models }) => models.BodyMesurements.findAll(),
    },
    Mutation: {
      createBodyMesurements: (parent, args, { models }) => models.BodyMesurements.create(args),
    },
  };
  
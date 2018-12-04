export default {
    Query: {
      getMembershipApplication: (parent, { id }, { models }) => models.MembershipApplication.findOne({ where: { id } }),
      allMembershipApplications: (parent, args, { models }) => models.MembershipApplication.findAll(),
    },
    Mutation: {
      createMembershipApplication: (parent, args, { models }) => models.MembershipApplication.create(args),
    },
  };
  
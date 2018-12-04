export default {
    Query: {
      fields: {
        getUser: {
          where: (table, empty, args) => `${table}.id = ${args.id}`,
        },
      },
    },
    Gym: {
      sqlTable: 'gyms',
      uniqueKey: 'id',
      fields: {
        account: {
          junction: {
            sqlTable: '"accounts"',
            include: {
              primary: {
                sqlColumn: 'primary',
              },
            },
            sqlJoins: [
              (gymTable, junctionTable) => `${gymTable}.accountid = ${junctionTable}."id"`
            ],
          },
        },
      },
    }   /*,

 Book: {  
      sqlTable: 'books',
      uniqueKey: 'id',
      fields: {
        authors: {
          junction: {
            sqlTable: '"bookAuthors"',
            include: {
              primary: {
                sqlColumn: 'primary',
              },
            },
            sqlJoins: [
              (bookTable, junctionTable) => `${bookTable}.id = ${junctionTable}."bookId"`,
              (junctionTable, authorTable) => `${junctionTable}."authorId" = ${authorTable}.id`,
            ],
          },
        },
      },
    },*/
  };
  
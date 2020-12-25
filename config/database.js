require('dotenv');

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        client: 'mongo',
        uri : `mongodb://lh-backend:${process.env.PASSWORD}@lhglobal-shard-00-00.fwjey.mongodb.net:27017,lhglobal-shard-00-01.fwjey.mongodb.net:27017,lhglobal-shard-00-02.fwjey.mongodb.net:27017/<lhGlobal>?ssl=true&replicaSet=atlas-h2guxr-shard-0&authSource=admin&retryWrites=true&w=majority`
      },
      options: {
        "ssl" : true,
        useNullAsDefault: true,
      },
    },
  },
});

require('dotenv');

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        client: 'mongo',
        uri : `mongodb://lh-backend:${process.env.PASSWORD}@cluster0-shard-00-00.22nxh.mongodb.net:27017,cluster0-shard-00-01.22nxh.mongodb.net:27017,cluster0-shard-00-02.22nxh.mongodb.net:27017/<lh-global>?ssl=true&replicaSet=atlas-a5rxh8-shard-0&authSource=admin&retryWrites=true&w=majority`
      },
      options: {
        "ssl" : true,
        useNullAsDefault: true,
      },
    },
  },
});

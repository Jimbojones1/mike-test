import mongoose from 'mongoose'

// mongoose.connect(
//   'mongodb://127.0.0.1:27017/skillmap'// < replace with your database name!

// );

mongoose.connect(
  process.env.DATABASE_URL// < replace with your database name!

);

const db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
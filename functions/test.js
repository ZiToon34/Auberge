const { MongoClient } = require('mongodb');

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017';
const DB_NAME = 'Test';


function successResponse(callback, res){
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(res)
  });
}

function errorResponse(callback, err){
  console.error(err);
  callback({
    statusCode: 500,
    body: JSON.stringify({ error: err })
  }, null)
}
let cachedDb = null;

async function connectToDatabase() {

  if (cachedDb) {

    return cachedDb;

  }

  // Connect to our MongoDB database hosted on MongoDB Atlas

  const client = await MongoClient.connect(DB_URL);

  // Specify which database we want to use

  const db = await client.db("Test");

  cachedDb = db;

  return db;

}
exports.handler = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

  // Get an instance of our database

  const db = await connectToDatabase();
    if(event.httpMethod === 'POST') {
      const { seating, firstFly, name } = JSON.parse(event.body);
      infoCollection.insert({
       'seating': seating,
       'firstFly': firstFly,
       'name': name
      }, async (err, result) => {
        if (err) {
          console.log('Mongo db error');
          return errorResponse(callback, err);
        } 
        successResponse(callback, await result.toArray());
      });
    }
    if(event.httpMethod === 'GET') {
        const avions =  await db.collection("avions").find({'name': event.queryStringParameters.name}).toArray();

        const response = {
      
          statusCode: 200,
      
          body: JSON.stringify(avions),
      
        };
        return response; 
    }
}
const { MongoClient } = require('mongodb');
import { Context, Callback, mongoDB } from 'mongodb';

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
exports.handler = (event, context, callback) => {
  MongoClient.connect(`${DB_URL}/${DB_NAME}`, (err, connection) => {
    if (err) return errorResponse(callback, err);

    const db = connection.db(DB_NAME);
    const infoCollection = db.collection('avions');
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
      infoCollection.find({'name': event.queryStringParameters.name}, async (err, result) => {
        if (err) {
          console.log('Mongo db error');
          return errorResponse(callback, err);
        }
        successResponse(callback, await result.toArray());
      });
    }
    connection.close()
  });
}
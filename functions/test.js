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
    const infoCollection = db.collection('animaux');
    if(event.httpMethod === 'POST') {
      const { race, type, father, mother, birthday_date, loof, available, sexe, photos, siret } = JSON.parse(event.body);
      infoCollection.insert({
        'race': race,
        'type': type,
        'father': father,
        'mother': mother,
        'birthday_date': birthday_date,
        'loof': loof,
        'available': available,
        'sexe': sexe,
        'photos': photos,
        'siret': siret,
      }, async (err, result) => {
        if (err) {
          console.log('Mongo db error');
          return errorResponse(callback, err);
        } 
        successResponse(callback, await result.toArray());
      });
    }
    if(event.httpMethod === 'GET') {
      infoCollection.find({'type': event.queryStringParameters.type}, async (err, result) => {
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
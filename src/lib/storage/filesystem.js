'use strict';

import fs from 'fs';

const storage = {};

const databaseDir = `${__dirname}/../../data`;

storage.save = data => {
  return new Promise((resolve, reject) => {
    if (!data.id) { reject('ERROR: No ID provided with data'); }

    let file = `${databaseDir}/${data.id}.json`.trim();
    let text = JSON.stringify(data);

    fs.writeFile(file, text, err => {
      if (err) { reject(err); }
      resolve(data);
    });
  });
};

storage.get = customerId => {
  return new Promise((resolve, reject) => {
    if (!customerId) { reject('ERROR: No ID provided for GET request'); }

    let file = `${databaseDir}/${customerId}.json`;

    fs.readFile(file, (err, data) => {
      if (err) { reject(err); }
      let obj = JSON.parse(data.toString());
      resolve(obj);
    });
  });
};

storage.delete = customerId => {
  return new Promise((resolve, reject) => {
    if (!customerId) { reject('ERROR: No ID provided for DELETE request'); }

    let file = `${databaseDir}/${customerId}.json`;

    fs.unlink(file, err => {
      if (err) { reject(err); }
      resolve('Delete successful');
    });
  });
};

export default storage;
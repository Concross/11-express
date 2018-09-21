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
      resolve(data.id);
    });
  });
};

storage.get = customerId => {
  return new Promise((resolve, reject) => {
    if (!customerId) { reject('ERROR: No ID provided for GET reques'); }

    let file = `${databaseDir}/${customerId}.json`;

    fs.readFile(file, (err, data) => {
      if (err) { reject(err); }
      let obj = JSON.parse(data.toString());
      resolve(obj);
    });
  });
};

export default storage;
'use strict';

import express from 'express';
import Customers from '../models/customers';

const router = express.Router();

router.post('/api/v1/customers', (req, res) => {
  let [age, gender, ethnicity, salary, maritalStatus] = [
    req.body.age,
    req.body.gender,
    req.body.ethnicity,
    req.body.salary,
    req.body.maritalStatus,
  ];

  let customer = new Customers(age, gender, ethnicity, salary, maritalStatus);
  customer.save()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(console.error);
});

router.get('/api/v1/customers/:id', (req, res) => {
  if (!req.params.id) {
    res.status(400).send('Bad ID request');
  } else {
    Customers.get(req.params.id)
      .then(data => res.status(200).send(data))
      .catch(err => res.status(400).send(err));
  }

});

router.all('*', (req, res) => {
  console.log('routing');
  res.status(404);
  res.send();
});




export default router;
'use strict';

import express from 'express';
import Customers from '../models/customers';

const router = express.Router();

router.post('/api/v1/customers', (req, res) => {

  let customer = new Customers(req.body);
  customer.save()
    .then(data => {
      console.log(data);
      res.status(200).json(req.body);
    })
    .catch(err => {
      res.status(400).send(err);
    });
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

router.delete('/api/v1/customers/:id', (req, res) => {
  if (!req.params.id) {
    res.status(400).send('Bad ID request, unable to delete file');
  } else {
    Customers.delete(req.params.id)
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(400).send(err));
  }
});

router.all('*', (req, res) => {
  console.log('routing');
  res.status(404);
  res.send();
});




export default router;
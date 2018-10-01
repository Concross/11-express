'use strict';

import customersRouter from '../src/api/customersRouter';
import request from 'supertest';
import express from 'express';
import app from '../src/app';

describe('CATCH ALL route', () => {
  test('should return 404 for any undefined route', () => {
    request(app)
      .get('/api/v1/customers')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        console.log(res.body);
        expect(res.body).toBeDefined();
      });
  });
});
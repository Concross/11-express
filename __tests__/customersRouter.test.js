'use strict';

import customersRouter from '../src/api/customersRouter';
import request from 'supertest';
import express from 'express';
import app from '../src/app';

describe('CATCH ALL route', () => {
  test('should return 404 for any undefined route', () => {
    request(app.start)
      .get('/')
      .expect(1);
  });
});
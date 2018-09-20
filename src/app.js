'use strict';

import express from 'express';
import Customers from './lib/customers';

let app = express();

app.use(express.json);
app.use(express.urlencoded({ extended: true }));
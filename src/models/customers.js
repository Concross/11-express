'use strict';

import uuid from 'uuid/v1';
import storage from '../lib/storage/filesystem';

class Customers {
  constructor(config) {
    this.id = uuid();
    this.orderHistory = [];
    this.age = config && config.age || null;
    this.gender = config && config.gender || null;
    this.ethnicity = config && config.ethnicity || null;
    this.salary = config && config.salary || 0;
    this.maritalStatus = config && config.maritalStatus || null;
  }

  save() {
    return storage.save(this);
  }

  static get(customerId) {
    return storage.get(customerId);
  }

  static delete(customerId) {
    return storage.delete(customerId);
  }
}

export default Customers;
'use strict';

import uuid from 'uuid/v1';
import storage from '../lib/storage/filesystem';

class Customers {
  constructor(age = null, gender = null, ethnicity = null, salary = 0, maritalStatus = null) {
    this.id = uuid();
    this.orderHistory = [];
    this.age = age;
    this.gender = gender;
    this.ethnicity = ethnicity;
    this.salary = salary;
    this.maritalStatus = maritalStatus;
  }

  save() {
    return storage.save(this);
  }

  static get(customerId) {
    return storage.get(customerId);
  }
}

export default Customers;
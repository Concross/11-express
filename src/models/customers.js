'use strict';

import uuid from 'uuid/v1';

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
}

export default Customers;
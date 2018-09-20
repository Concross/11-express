'use strict';

import Customers from '../src/models/customers';

describe('Customers constructor tests', () => {
  let customer = new Customers();

  test('that constructor instantiates an object of type Customers', () => {

    expect(customer).toBeInstanceOf(Customers);
  });

  test('that a new customer object has a defined id', () => {
    let actual = customer.id;

    expect(actual).toBeDefined();
  });

  test('that a new customer object has a an empty array of orders', () => {
    let actual = customer.orderHistory;
    let expected = [];

    expect(actual).toEqual(expected);
  });

  test('that a new customer object has an age if given or null otherwise', () => {
    expect(customer.age).toBeNull();

    let oldCustomer = new Customers(99);
    let expected = 99;
    expect(oldCustomer.age).toBe(expected);
  });

  test('that a new customer object has a gender if given or null otherwise', () => {
    expect(customer.gender).toBeNull();

    let genderCustomer = new Customers(99, 'male');
    let expected = 'male';
    expect(genderCustomer.gender).toBe(expected);
  });

  test('that a new customer object has an ethnicity if given or null otherwise', () => {
    expect(customer.ethnicity).toBeNull();

    let ethnicCustomer = new Customers(99, 'male', 'hispanic');
    let expected = 'hispanic';
    expect(ethnicCustomer.ethnicity).toBe(expected);
  });

  test('that a new customer object has a salary if given or 0 otherwise', () => {
    expect(customer.salary).toBe(0);

    let salariedCustomer = new Customers(99, 'male', 'hispanic', 100000);
    let expected = 100000;
    expect(salariedCustomer.salary).toBe(expected);
  });

  test('that a new customer object has a maritalStatus if given or null otherwise', () => {
    expect(customer.maritalStatus).toBeNull();

    let marriedCustomer = new Customers(99, 'male', 'hispanic', 100000, 'married');
    let expected = 'married';
    expect(marriedCustomer.maritalStatus).toBe(expected);
  });
});
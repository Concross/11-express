'use strict';

import Customers from '../src/lib/customers';

describe('Customers constructor tests', () => {
  test('that constructor instantiates an object of type Customers', () => {
    let actual = new Customers();

    expect(actual).toBeInstanceOf(Customers);
  });

  test('that a new customer object has a defined id', () => {
    let customer = new Customers();
    let actual = customer.id;

    expect(actual).toBeDefined();
  });
});
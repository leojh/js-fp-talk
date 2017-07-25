
import { getFirstNamesOfMyBestCustomers } from '../logic/customers'
import customers from '../data/customers'

describe('customersWhoBuyATonFromMe', () => {
  test('Leo should be one of my best customers', () => {
    const customersWhoBuyATonFromMe = getFirstNamesOfMyBestCustomers(customers)

    for (var i = 0; i < customers.length; i++) {
      var customer = customers[i]
      if (customer.firstName === 'Leo') {
        var leo = customer
      }
    }

    expect(customersWhoBuyATonFromMe).toContainEqual(leo.firstName)
  })

  test('should be sorted', () => {
    const customersWhoBuyATonFromMe = getFirstNamesOfMyBestCustomers(customers)
    expect(customersWhoBuyATonFromMe).toEqual(['Erlich', 'Leo', 'Richard'])
  })

  test('log results', () => {
    console.log(getFirstNamesOfMyBestCustomers(customers))
  })
})
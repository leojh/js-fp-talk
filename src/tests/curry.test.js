import { makeCustomer } from '../logic/makeCustomers'
import customers from '../data/customers'

describe('makeCustomers', () => {
  test('makes customers when all params are supplied', () => {
    const makeJohns = makeCustomer('John')
    const makeJohnDoes = makeJohns('Doe')
    const johnDoesWith0Balance = makeJohnDoes(0)

    expect(johnDoesWith0Balance).toEqual({ firstName: 'John', lastName: 'Doe', balance: 0 })
  })
})

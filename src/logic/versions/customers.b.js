//Split into Functions
import { sort } from 'ramda'

export const getFirstNamesOfMyBestCustomers = function(customers) {
  const bestCustomers = customers.filter(c => c.balance > 5000)

  const firstNames = customers.map(c => c.firstName)

  const diff = (a, b) => a - b
  const sorted = sort(diff, firstNames)

  return sorted;
}


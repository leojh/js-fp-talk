// Pipe results

export const getFirstNamesOfMyBestCustomers = function (customers) {
  return customers
    .filter(c => c.balance > 5000)
    .map(c => c.firstName)
    .sort()
}

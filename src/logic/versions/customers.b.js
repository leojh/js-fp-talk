//Split into Functions
export const getFirstNamesOfMyBestCustomers = function(customers) {
  const bestCustomers = customers.filter(c => c.balance > 5000)
  const firstNames = bestCustomers.map(c => c.firstName)

  firstNames.sort((a, b) => {
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
  })

  return firstNames;
}



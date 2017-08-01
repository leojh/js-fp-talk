// Procedural
export const getFirstNamesOfMyBestCustomers = function(customers) {
  const bestCustomers = []
  for (var i = 0; i < customers.length; i++) {
    var customer = customers[i]
    
    if (customer.balance > 5000) {
      bestCustomers.push(customer)
    }
  }

  var firstNames = []

  for (var i = 0; i < bestCustomers.length; i++) {
    var customer = bestCustomers[i]
    firstNames.push(customer.firstName)
  }

  firstNames.sort(function(a, b) {
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
  })

  return firstNames;
}


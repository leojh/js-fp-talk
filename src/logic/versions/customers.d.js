// RAMDA 1 - All Ramda
import { compose, filter, map, sortBy, identity, gt, __, prop } from 'ramda'

export const getFirstNamesOfMyBestCustomers =
  compose(
    sortBy(identity),
    map(prop('firstName')),
    filter(
      compose(
        gt(__, 5000),
        prop('balance')
      )
    )
  )

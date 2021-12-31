// =======================================================================================

export const mapOrder = (array, order, key) => {
  array.sort((a, b) => order.indexOf(a[key]) - order.indexOf(b[key]))
  return array
}

const itemArray = [
  { id: 1, label: 'One'},
  { id: 2, label: 'Two' },
  { id: 3, label: 'Three' },
  { id: 4, label: 'Four' },
  { id: 5, label: 'Five' }
]
const itemOrder = [5, 4, 2, 3, 1]

const orderedArray = mapOrder(itemArray, itemOrder, 'id')
console.log('Ordered array:', orderedArray)
/**
 * Results:
 * 
 * Ordered array:
 *   [
    *  {"id":5,"label":"Five"},
    *  {"id":4,"label":"Four"},
    *  {"id":2,"label":"Two"},
    *  {"id":3,"label":"Three"},
    *  {"id":1,"label":"One"}
  *  ]
 */

// =======================================================================================

export const capitalizeFirstLetter = (str) => {
  if (!str) {
    return ''
  }

  return `${str[0].toUpperCase()}${str.slice(1)}`
};

// =======================================================================================

export const randomNumber = (min, max) => {
  return min + Math.trunc(Math.random() * (max - min));
}

// =======================================================================================

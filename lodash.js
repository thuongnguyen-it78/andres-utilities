/**
 * 1. partition(collection, predicate)
 * 2. zipObject(props, values)
 * 3. matches(conditionObject)
 * 4. overEvery(predicateFunctionArray), overSome(predicateFunctionArray)
 * 5. keyBy(collection, keyGetter)
 * 6. negate(function)
 * 7. cloneDeep(object, array)
 * 8. isEmpty(object || array)
 * 9. pickBy(object) like compact()
 * 10. groupBy(array)
 * 11. compact(array)
 * 12. property(string): shorthand is 'a.b'
 * 13. debounce()
 * 14. throttle()
 * 15. isEqual(): shallow comparison
 * 16. isArray()
 */
import _ from "lodash";

const integerList = [100, -100, 20, 10, 3, 29];
const isOdd = (number) => number % 2 !== 0; 
// const evenNumberList = integerList.filter(_.negate(isOdd))
// const oddNumberList = integerList.filter(isOdd)

const [oddNumberList, evenNumberList] = _.partition(integerList, isOdd);

// ============================================================================== //

const headerList = ["id", "name", "age"];
const rowList = [
  ["1", "Viet", 30],
  ["2", "Hien", 28],
  ["3", "Tien", 18],
];

const userList = rowList.map((row) => _.zipObject(headerList, row));

// ============================================================================== //

const todoList = [
  { name: "Learning JavaScript", checked: true, urgent: true },
  { name: "Learning React", checked: false, urgent: true },
  { name: "Learning Redux", checked: true, urgent: false },
];

// const urgentButNotDoneYet = todoList.filter((todo) => todo.urgent && !todo.checked)
const urgentButNotDoneYet = todoList.filter(
  _.matches({
    checked: false,
    urgent: true,
  })
);

// ============================================================================== //

const facebookList = [
  { name: "ABC", username: "__abc" },
  { name: "LONG", username: "lo_ng" },
  { name: "AN", username: "an" },
];


const hasShortName = (user) => user.name.length < 4
const hasLodashInUsername = (user) => /_/.test(user.name)

// const facebookResultAnd = facebookList.filter((facebook) => {
//     return hasShortName(facebook) && hasLodashInUsername(facebook)
// })

// const facebookResultOr = facebookList.filter((facebook) => {
//     return hasShortName(facebook) || hasLodashInUsername(facebook)
// })

const facebookResultAnd = facebookList.filter(_.overEvery([hasShortName, hasLodashInUsername]))
const facebookResultOr = facebookList.filter(_.overSome([hasShortName, hasLodashInUsername]))


// ==================
const indexByUsername = _.keyBy(facebookList, (facebook) => facebook.username)
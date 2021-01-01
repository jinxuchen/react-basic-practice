import { map, filter, find, forEach, some, reduce, includes } from "lodash";

const ArrMethod1 = () => {
  const users = [
    { name: "ck", age: 16 },
    { name: "abby", age: 18 },
    { name: "seb", age: 21 },
    { name: "ch", age: 22 },
    { name: "aa", age: 23 },
  ];

  const items = [1, 2, 3, 4, 5];

  // filter: get all. return an arr
  const usersList1 = filter(users, (user) => {
    return user.age > 21;
  });

  //find: get first one. return an object
  const usersList2 = find(users, (user) => {
    return user.age < 21;
  });

  //forEach: dont return, like for loop
  forEach(users, (user) => {
    // console.log(user.name);
  });

  //some: if there is any. return true or false
  const usersList3 = some(users, (user) => {
    return user.age < 21;
  });

  //reduce: acummulate
  const total = reduce(
    users,
    (currentTotal, user) => {
      return user.age + currentTotal;
    },
    0
  );

  //include: if include. return true/false
  const includesTwo = items.includes(10);

  console.log(includesTwo);
  return (
    <div>
      users:
      {map(usersList2, (user, key) => (
        <div key={key}>{user.name}</div>
      ))}
    </div>
  );
};

export default ArrMethod1;

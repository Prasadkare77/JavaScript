let map = new Map();
console.log(typeof map);

map.set(1,"Prasad");
map.set(2,"Akshita");
map.set(3,"Omkar");
map.set(4,"Ram");
console.log(map);
console.table(map);

let mapSize = map.size;
console.log(`Map Size: ${mapSize}`);

let getValue = map.get(2);
console.log(getValue);
let getNewValue = map.get(5);
console.log(getNewValue);

map.set(3,"Lakhan");

//Delete Entry
map.delete(3);

//Key is exist or not
const isAvailable = map.has(1);
console.log(isAvailable);

const keys = map.keys();
console.log(keys);

const values = map.values();
console.log(values);

console.log("Taversing map");
const keyOfMaps = map.keys();
for (const key of keyOfMaps) {
   const value = map.get(key);
   console.log(`${key} ${value}`);
}

console.log(map);
console.table(map);


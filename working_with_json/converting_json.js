const jsonData = '{"parent":{"name":"Sally","age":45,"children":[{"name":"Kim","age":3},{"name":"Lee","age":1}]}}';

let jsObject = JSON.parse(jsonData);
jsObject.parent.age = 35;
console.log(JSON.stringify(jsObject));
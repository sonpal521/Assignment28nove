////  Program to demonstrate destructuring in nested objects

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
  };
  const {
    b,
    d
  } = obj;
  console.log(b); // 2
  console.log(d); // 4
  console.log(a); // ReferenceError: a is not defined




  /**
   *  Program to clone the object and change 
   * the property and then iterate the array of objects 
   * using inbuilt functions and to console 
   * the object property and frame a meaning full sentence.
   *
   */
  function isObject(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };
  function iterationCopy(src) {
    let target = {};
    for (let prop in src) {
      if (src.hasOwnProperty(prop)) {
        // if the value is a nested object, recursively copy all it's properties
        if (isObject(src[prop])) {
          target[prop] = iterationCopy(src[prop]);
        } else {
          target[prop] = src[prop];
        }
      }
    }
    return target;
  }
  const source = {a:1, b:2, c:3};
  const target = iterationCopy(source);
  console.log(target); // {a:1, b:2, c:3}
  // Check if clones it and not changing it
  source.a = 'a';
  console.log(source.a); // 'a'
  console.log(target.a); // 1
  
  // Nested example!
  const x = {a: 1, b: {c: 1}};
  const y = iterationCopy(x);
  x.b.c = 2;
  console.log(y.b.c); // still "1"
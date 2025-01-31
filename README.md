## Questions Answer



**Question-1: What are some benefits of using TypeScript over JavaScript in a project?**

**Answer:** There are various benefit of using TypeScript over JavaScript. Some benefits are -
1. Before TypeScript Javascript use dynamic type system(assume variable type by its own logic), so developer do not need to declare a variable type. Which have a major effect in enterprise level application.
2. TypeScript helps developers to catch type related error at code compile time, Which reducing run time errors.
3. TypeScript can also catch common programming related errors during development time.
4. JavaScript has inheritance and other unfamiliar syntax which are not same as other programming language, but these problem is solve typescript and standardized JavaScript with other language.
5. TypeScript gives OOP flavour with JavaScript.
***



**Question-2: What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each?**

**Answer:** Optional chaining(?.) and nullish coalescing(??) are two operators in TypeScript that help to simplify code and avoid errors when working with potentially undefined or null values.
- Optional Chaining (?.) defines variable value declaration is not mandatory. Examples:
```TypeScript
interface Person {
    name: string;
    address?: "Chittagong";
}
const person: Person = {
    name: 'Jummun',
};
console.log(person?.address); // output = undefined
```
Here `console.log();` will print `undefined` as we use optional chaining.

- Nullish coalescing return default value if there is undefined or null. Examples:
```TypeScript
const isAdmin = undefined || null;
console.log(isAdmin ?? 'General User');
```
Here `console.log();` will print `General User` as we use nullish coalescing.
***



**Question-3: How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?**

**Answer:** In TypeScript there are several process to handle asynchronous operations such as callbacks, promises and async/await.
- Advantages of using async/await over callbacks or Promises:
    - Async/await makes asynchronous code look like synchronous code, so the code is easy to read, write and maintain.
    - Async/await to run multiple asynchronous operations in parallel.
***



**Question-4: How can you use TypeScript's enums, and what are their advantages?**

**Answer:** TypeScript's enums also provide type safety by define a set of named constants that can be used throughout the codebase.
Examples:    
```TypeScript
enum Status {
    SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN
}
interface ApiResponse {
    type: Status;
    code: number;
}
const response1: ApiResponse = {
    type: Status.SUCCESS,
    code: 200,
}
console.log(response1); // output {type: 0, code: 200}
```
***



**Question-5: Explain the role of type guards in TypeScript and provide an example of a custom type guard.**

**Answer:** Type guards provide type safety by allowing you to narrow down the type of an object within a certain scope. This helps to prevent errors caused by using incorrect values or types.
Examples of type guard using in guard:    
```TypeScript
interface Rectangle {
  width: number;
  height: number;
}
function isRectangle(shape: unknown): string {
    if('width' in shape && 'height' in shape){
        console.log('Object is rectangle.');
    }
}
```
***



**Question-6: Can you give an example of how to use "readonly" properties in TypeScript?**

**Answer:**
Uses example of readonly properties:    
```TypeScript
class Person {
    name: string;
    age?: number;
    readonly nidNumber: number;
  
    constructor(name: string, age: number, nidNumber: number) {
      this.name = name;
      this.age = age;
      this.nidNumber = nidNumber;
    }
  }
  const person: Person = new Person('Jummun', 25, 12345);
  person.nidNumber = 54321; // Error: not assignable
```
***



**Question-7: Can you give an example of how to use "readonly" properties in TypeScript?**

**Answer:** In TypeScript, a union type is a type that can hold values of multiple types. It is created by using the pipe character `|` to separate the types.
Examples:    
```TypeScript
interface User {
    firstName: string;
    middleName: string | null;
    lastName: string;
}
const user:User = {
    firstName: "Jummun",
    middleName: null,
    lastName: "Isalm"
}
```
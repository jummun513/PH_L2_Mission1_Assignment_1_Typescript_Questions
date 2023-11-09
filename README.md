## Questions Answer:

#### What are some benefits of using TypeScript over JavaScript in a project?
**Ans** There are various benefit of using TypeScript over JavaScript. Some benefits are -
1. Before TypeScript Javascript use dynamic type system(assume variable type by its own logic), so developer do not need to declare a variable type. Which have a major effect in enterprise level application.
2. TypeScript helps developers to catch type related error at code compile time, Which reducing run time errors.
3. TypeScript can also catch common programming related errors during development time.
4. JavaScript is not suitable to use in enterprise level application before typescript.
5. JavaScript has inheritance and other unfamiliar syntax which are not same as other programming language, but these problem is solve typescript and standardized JavaScript with other language.
6. TypeScript gives OOP flavour with JavaScript.


#### What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each?
**Ans** Optional chaining(?.) and nullish coalescing(??) are two operators in TypeScript that help to simplify code and avoid errors when working with potentially undefined or null values.
- Optional Chaining (?.) defines variable value declaration is not mandatory. Examples:
```TypeScript
interface Person {
  name: string;
  address?: "Chittagong"
}
const person: Person = {
  name: 'Jummun';
};
console.log(person?.address);
```
Here `console.log();` will print `undefined` as we use optional chaining.

- Nullish coalescing return default value if there is undefined or null. Examples:
```TypeScript
const isAdmin = null | undefined;
console.log(isAdmin ?? 'General User');
```
Here `console.log();` will print `General User` as we use nullish coalescing.
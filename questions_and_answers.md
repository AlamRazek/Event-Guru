1. Write the correct answer from the following options and give an explanation (2-5 lines).
   let greeting;
   greetign = {};
   console.log(greetign);
   A: {}
   B: ReferenceError: greetign is not defined
   C: undefined
   Answer:B => because there is nothing declared as greetign.it might be a spelling mistake.
2. Write the correct answer from the following options and give an explanation (2-5 lines).
   function sum(a, b) {
   return a + b;
   }

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer: c => this function will take two value but the provided values are diffrent.one is number and another is string.thats why the addition of those two are 12.

3. Write the correct answer from the following options and give an explanation (2-5 lines).
   const food = ["🍕", "🍫", "🥑", "🍔"];
   const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

Answer: A => because we are console logging the food array not the object .we are not console logging the info object which contains the first element of the food array and the food array is not changed by the info object.

4. Write the correct answer from the following options and give an explanation (2-5 lines).
   function sayHi(name) {
   return `Hi there, ${name}`;
   }

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

Answer: B => in the above function there is argument 'name'.when i am calling the function it expects we pas something in that and we are not passing anythin thats why its undefined.

5. Write the correct answer from the following options and give an explanation (2-5 lines).
   let count = 0;
   const nums = [0, 1, 2, 3];

nums.forEach((num) => {
if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer:C => the value of count is 0.0 is a falsy value in js.when forEach go through nums then if nums is true then it will add count +1.so in that case it was true 3 times.

const add = (a, b) => a + b + 1;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

// Jest has Global variables to construct our test cases
// setting up new test case
test('should add two numbers',() => {
    const result = add(3,4);
    
    // if(result !== 7 ) {
    //     throw new Error(`You added 4 and 3, the result was ${result} .Expected 7`);
    // }

    expect(result).toBe(8);
});

test('should generate greeting from name',() => {
    const result = generateGreeting('Andrei');
    expect(result).toBe(`Hello Andrei!`);
})

test('should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
})
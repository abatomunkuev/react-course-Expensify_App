const promise = new Promise((resolve,reject) => {
    // here we do our long running asynchronous task like making a request to a database, looking for a file system
    // Asynchronous JavaScript
    // resole mean that operation went successfully, while reject means not successfully
    setTimeout(() => {
        resolve({
            name: 'Andrei',
            age: 19
        });
        // down below, the other resolved call is going to be ignored
        //resolve('This is my other resolved data');
        //reject('Something went wrong!');
    }, 5000)
});
// ".then" let us register our callback, that callback is going to fire when and if the promise resolves 
console.log('Before');
promise.then((data) => {
    console.log('1',data);
    
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('This is my other promise!');
        }, 5000)
    });
}).then((str) => {
    console.log('does this run!?',str);
}).catch((error) => {
    console.log('error: ',error);
});
console.log('After');
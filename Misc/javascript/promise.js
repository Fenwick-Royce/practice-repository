let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
  });

let promise = new Promise(function(resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

let promise = new Promise(function(resolve, reject) {
    resolve("done");

    reject(new Error("darn")); // ignored
    setTimeout(() => resolve("took logn enough"));
});

let promise = new Promise(function(resolve, reject) {
    resolve(123); // immediately give the results: 123
});

promise.then (
    function(result) {/* Handle a successful result */ },
    function(error {/* handle an error */})
);

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
});

promise.then(
    result => alert(result)
    error => alert(error)
);


// ========================= EXAMPLE 1 =========================
function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}



let promise = job();
let promise = return new promise(function(result, reject))

promise

.then(function() {
    console.log('Success 1');
})

//skip

.then(function() {
    console.log('Success 2');
})

//skip

.then(function() {
    console.log('Success 3');
})

//skip

.catch(function() {
    console.log('Error 1');
})
//will run reject. will run in console.//

.then(function() {
    console.log('Success 4');
});



// ========================= EXAMPLE 2 =========================
function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}
//resolve will be called data//

let promise = job(true);

promise

.then(function(data) {
    console.log(data); 
//one pramimeter. will log data (sucess)//
    return job(false);
})

.catch(function(error) {
    console.log(error);

    return 'Error caught';
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error);
});
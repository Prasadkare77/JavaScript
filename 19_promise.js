
let isNotesPrepared = true;
let promise = new Promise(function(resolve, reject){
    if(isNotesPrepared){
        resolve(`"Guys, Please take this notes`);
    }
    else {
        reject(`Sorry, I didn't get time...`);
    }
});
promise.then(function resolve(success){
    console.log(success);
}).catch(function reject(reject){
    console.log(reject);
}).finally(function(){
    console.log(`I should have notes...`);
});


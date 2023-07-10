

//Using Arrow Function
let promises = new Promise((resolve, reject)=>{
    if(isNotesPrepared){
        resolve(`"Guys, Please take this notes`);
    }
    else {
        reject(`Sorry, I didn't get time...`);
    }
});
promises.then((success)=>{
    console.log(success);
}).catch((reject)=>{
    console.log(reject);
}).finally(()=>{
    console.log(`I should have notes...`);
});
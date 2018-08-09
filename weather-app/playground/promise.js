var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('it worked');
        reject('failed');
    }, 2500);
})

somePromise.then((message) => {
    console.log('succcess ', message);
}, (errorMessage) => {
    console.log('error ', errorMessage);
});
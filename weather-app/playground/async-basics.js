console.log('Starting app');

setTimeout(() => {
console.log('inside of callback');
},20);


setTimeout(() => {
    console.log('inside of callback 2');
    },10);

    for (let index = 0; index < 100000; index++) {
        if(index % 1000 == 0)
            console.log(index);
    }

    for (let index = 0; index < 100000; index++) {
        if(index % 1000 == 0)
            console.log(index + "!");
    }
console.log('Finishing up');
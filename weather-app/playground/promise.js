var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a == "number" && typeof b == "number") {
        resolve(a + b);
      } else {
        reject("Arguments must be numbers");
      }
    }, 1500);
  });
};



asyncAdd(5, '7')
  .then(
    res => {
      console.log("Result: ", res);
      return asyncAdd(res, 33);
    }
  )
  .then(
    res => {
      console.log("should be 45 ", res);
    }
  );

  asyncAdd(5, "7")
  .then(res => {
    console.log("Result: ", res);
    return asyncAdd(res, 33);
  })
  .then(res => {
    console.log("should be 45 ", res);
  })
  .catch(error => {
    console.log(error);
  });

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //Here will be the logic for whether the to return success/failure
//     //resolve('it worked');
//     reject("failed");
//   }, 2500);
// });

// somePromise.then(
//   //Here will be the logic for what to do for success/failure
//   message => {
//     console.log("succcess ", message);
//   },
//   errorMessage => {
//     console.log("error ", errorMessage);
//   }
// );

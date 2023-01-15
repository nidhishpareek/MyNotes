function getRoot(value, callback) {
  setTimeout(() => {
    const root = Math.sqrt(value);
    callback(root);
  }, Math.random() * 1000);
}
function getRootList(arr, callback) {
  var PromiseArray = [];

  for (let i = 0; i < arr.length; i++) {
    PromiseArray.push(
      new Promise(function (resolve, reject) {
        getRoot(arr[i], resolve);
      })
    );
  }

  Promise.all(PromiseArray).then((values) => {
    callback(values);
  });
}

getRootList([1, 9, 4, 16, 36, 25, 49, 81, 64, 100], (roots) =>
  console.log(roots)
);
// should print [1, 3, 2, 4, 6, 5, 7, 9, 8, 10] in console
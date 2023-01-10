// Its a netmeds.com clone created with React, Redux and

const pro = new Promise((resolveOuter, reject) => {
  resolveOuter( new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
        var current = new Date();
        console.log(current.getMinutes(), current.getSeconds(), current.getMilliseconds())
    }, 2000)
  }));

});
var current = new Date();
console.log(current.getMinutes(), current.getSeconds(), current.getMilliseconds())
pro.then(() => console.log("DONE")).then(console.log('done 2')).catch(() => console.log("rejected"));
console.log(current.getMinutes(), current.getSeconds(), current.getMilliseconds())

hashfunction
probing
liner
quadratic
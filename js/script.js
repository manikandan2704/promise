let v = new Promise(function (resolve, reject) {
    let a =parseInt(prompt("enter your number"));
    let b=parseInt(prompt("enter your number"));
    let c=a+b;
    if (c>40) {
        resolve("success");
    }
    else {
        reject("failed")
    }
})
v.then(function () {
    console.log("success")

})
    .catch(function () {
        console.log("failure")
    })
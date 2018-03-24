var asyncadd = (a,b)=>{
    return new Promise((resolve,reject) => {
        if(typeof a === 'number' && typeof b ==='number')
            resolve(a+b);
        else
            reject("input must be numbers. ");
    })
}

asyncadd('abc',7).then((a)=>{
    console.log("Sum is ",a);
},(message)=>{
    console.log(message);
});












/*var somePromise = new Promise((resolve,reject) =>{
    resolve("Success");
    reject("Failure");
});
somePromise.then((message)=>{
    console.log(message);
},(message)=>{
    console.log(message);
});*/
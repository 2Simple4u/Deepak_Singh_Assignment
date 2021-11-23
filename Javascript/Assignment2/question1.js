const square=(x) => x*x;
const double = (x)=> x*2;

const compose = (...fns) => val => fns.reduceRight((prev,fn) => fn(prev),val);

const comRes= compose(square,double)(5);
console.log(comRes);

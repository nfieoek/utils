const curry = (fn, ...args) => {
    console.log(fn,args)
    if (args.length >= fn.length) {
        return fn(...args);
    } else {
        return (...moreArgs) => curry(fn, ...args, ...moreArgs);
    }
};

const add = (a,b,c) => {
    return a+b+c;
};

const curriedAdd = curry(add);

console.log(curriedAdd(1, 2, 3)); // 输出 6
console.log(curriedAdd(1)(2, 3,4)); // 输出 6
console.log(curriedAdd(1)(2)(3)); // 输出 6
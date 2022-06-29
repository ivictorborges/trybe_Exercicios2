const sum = (...rest) => rest.reduce(((acc, number) => acc + number),0);
console.log(sum(8,3,4));

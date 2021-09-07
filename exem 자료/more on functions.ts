// construct signatures
type SomeObject = {
    str: string;
    logString: () => void;
};

type SomeConstructor = {
    new (s: string): SomeObject;
};

class StringConstructor implements SomeObject {
    constructor(public str: string) {};

    logString() {
        console.log(this.str);
    };
};

function makeObj(s: SomeConstructor) {
    return new s('hello');
};

const stringObj = makeObj(StringConstructor);
stringObj.logString();

// generic functions
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
};

const parsed = map(['1', '2', '3'], (n) => parseInt(n));
console.log(parsed);

// specifying type arguments
function combine<Type>(arr1: Type[], arr2: Type[]):Type[] {
    return arr1.concat(arr2);
};
const arr = combine<string | number>([1,2,3], ['hello']);
console.log(arr);
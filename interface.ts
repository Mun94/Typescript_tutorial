interface ClockInterfase {
    tick: () => void;
};

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterfase;
};

class DigitalClock implements ClockInterfase {
    constructor(h: number, m: number) {};
    
    tick() {
        console.log('beep beep');
    };
};

class AnalogClock implements ClockInterfase {
    constructor(h: number, m: number) {};

    tick() {
        console.log('tick tock');
    };
};

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterfase {
    return new ctor(hour, minute);
};

const digital = createClock(DigitalClock, 12, 17);
const analog = createClock(AnalogClock, 7, 32);

console.log(digital.tick(), analog.tick());

//////////////////////////////////////////////////////////////////////////////////////////
class A {
    num: number

    constructor() {
        this.num = 1;
    };
};

interface sumType {
    get: () => void;
};

class B<Type> extends A implements sumType{
    aa: Type;
    bb: Type;
    constructor(a: Type, b: Type) {
        super();

        this.aa = a;
        this.bb = b;
    };

    get() {
        const sum = Number(this.num) + Number(this.aa)
        console.log(this.num)
        console.log(this.aa)
        console.log(this.bb)
        console.log(sum)
    };
};

const result = new B<number>(2, 3);
console.log(result.get())



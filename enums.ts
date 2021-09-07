enum Direction {
    up = 1,
    down,
    left,
    right
};

console.log(Direction);

enum Direction2 {
    up = 'UP',
    down = 'DOWN',
    left = 'LEFT',
    right = 'RIGHT'
};

console.log(Direction2);

///////////////////////////////////////////////
enum LogLevel {
    ERROR, WARN, INFO, DEBUG
};

// type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';와 동일
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string): void {
    const num = LogLevel[key];

    if(num <= LogLevel.WARN) {
        console.log('log level key is:', key);
        console.log('log level value is:', num);
        console.log('log level message is:', message)
    };
};

printImportant('ERROR', 'This is a message');


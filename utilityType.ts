// partial
interface Todo {
    title: string;
    descripttion: string;
};

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
};

const todo = updateTodo({title: 'a', descripttion: 'b'}, {descripttion: 'c'});
console.log(todo);

// Readonly
interface Todo2 {
    title: string;
};

const todo2: Readonly<Todo2> = {
    title: 'asdf'
};

// Record
interface PageInfo {
    title: string;
};

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
    home   : {title: 'home'},
    about  : {title: 'about'},
    contact: {title: 'contact'}
};

// Pick
interface Todo3 {
    title: string;
    description: string;
    completed: boolean;
};

type TodoPreview = Pick<Todo3, 'title' | 'completed'>;

const todo3: TodoPreview = {
    title: 'Clean room',
    completed: false
};

// Omit
interface Todo4 {
    title: string;
    description: string;
    completed: boolean;
};

type TodoPreview2 = Omit<Todo4, 'description'>;

const todo4: TodoPreview2 = {
    title: 'Clean room',
    completed: false
};
export interface Foo {
    bar: number;
}

interface Hidden {
    baz: number;
}

function hidden(h: Hidden) {
    console.log(h);
}

export function exportedButNotReferenced() {
    return "test";
} 

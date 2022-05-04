var c = 1

a()
b()
console.log(c);

function a() {
    var c = 10
    console.log(c);
}

function b() {
    console.log(c);
    var c = 200
}
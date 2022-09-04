// Global scope

// Declare your variable here
let myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

function fun2() {
    let output = "";
    if (typeof myGlobal != "indefined") {
        outputs += "myGlobal: " + myGlobal;
    }

    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();
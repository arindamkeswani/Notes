const seconds = new Date().getSeconds();

setTimeout(function() {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log(`Ran after ${new Date().getSeconds() - seconds} seconds`);
}, 5000)

while (true) {
  if (new Date().getSeconds() - seconds >= 10) {
    console.log("Good, looped for 2 seconds")
    break;
  }
}
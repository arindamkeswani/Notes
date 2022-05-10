// const seconds = new Date().getSeconds();

// setTimeout(function() {
//   // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
//   console.log(`Ran after ${new Date().getSeconds() - seconds} seconds`);
// }, 5000)

// while (true) {
//   if (new Date().getSeconds() - seconds >= 10) {
//     console.log("Good, looped for 2 seconds")
//     break;
//   }
// }

(function () {
  if ((-100 && 100 && "0")|| [] === true || 0){
    console.log(1); //#
   if ([] || (0 && false)){
      console.log(2); //#
    }
    if (Infinity && NaN && "false"){
      console.log(3);
      if (""){
        console.log(4);
      }
     }else{
      console.log(5); //#
      if (({} || false === "") && !(null && undefined)){
        console.log(6); //#
      }
    }
  }
})();
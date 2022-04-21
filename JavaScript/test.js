person1={
    name: "Arindam",
    age: 10
}


let showDetails = function(city , state){
    console.log(this.name + " " +this.age + " " + city + ' ' + state)
}

// let showDetailsBind = showDetails.bind(person1 , 'Noida' , 'UP')
// showDetailsBind()

Function.prototype.myBind = function(...args){
    let obj = this
    return function(){
        obj.call(args[0])
    }
}
let showDetailsMyBind = showDetails.myBind(person1)
showDetailsMyBind()
    
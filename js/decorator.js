function sayYourName(target,key,descriptor){
    descriptor.value=()=>{
        console.log("我是XXX");
    }
    console.log("报上名来")
    return descriptor;  
}
class Monkey{
    @sayYourName
    sayName(){}
}

export default Monkey;
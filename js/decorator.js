function sayYourName(target,key,descriptor){
    descriptor.value=()=>{
        console.log("我是齐天大圣");
    }
    console.log("报上名来")
    return descriptor;  
}
class Monkey{
    @sayYourName
    sayName(){}
}

export default Monkey;
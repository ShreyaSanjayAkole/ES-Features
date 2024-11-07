export const wel = () => {
    console.log("welcome");
}

export const hello = (name) => {
    console.log(`Hello ${name}`);
}

export default function add(a,b){
    return a+b;
}

let multiply = (a,b) =>{
    return a*b;
}

export{
    multiply as mul
}
function sample(){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            console.log("hello world");
        },2000);
    });
}

async function print() {
    await sample();
    
}
function receivesAFunction(mainCall){
    mainCall(secondCall);
}

function returnsANamedFunction(){
    return function testTwo(){ console.log("Did this work?");}
}

function returnsAnAnonymousFunction(){
    return () => {console.log("Hello is this thing on?")}
}


//for testing? I didnt need all of this...
function mainCall(){
    secondCall(thirdCall)
    let part1 = "H";
}

function secondCall(){
    thirdCall();
    let part2 = "E";
}

function thirdCall(){
    let part3 = "Y!";
    
}
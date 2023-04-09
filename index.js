function receivesAFunction(Spy){
    console.log((Spy));
}
function receivesAFunction(chai){
    chai();
    
}
chai(Spy);

function returnsANamedFunction (a) {
    return receivesAFunction;
}

function returnsAnAnonymousFunction(){
    return function () {};
}
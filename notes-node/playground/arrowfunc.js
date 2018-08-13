var squar = x => x*x;

let wow = squar(2);
console.log(wow);


var user = {
    name: 'kalden',
    sayHi: () => {
        console.log(`hi ${this.name}`);
    },
    sayhii() {
        console.log(`hi ${this.name}`);
    },
    

}


user.sayhii();
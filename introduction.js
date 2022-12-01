// for(let i=0;i<10;i++) console.log(i)

//const complete = function() {
//    console.log("function completed!")
//}

//setTimeout(complete, 5000) // wait for 5 sec.

//console.log("calling after setTimeout function complete");

const show = function(i, j){
    console.log(i, j)
}

for(let i = 10; i>0; i--) setTimeout(show, i * 1000, i, 2*i)
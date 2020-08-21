function buildFunctions() {
     var arr = [];
     for (let i =0; i< 3; i++) {
         arr.push(function() {
             console.log(i);
         });
     }
     return arr;
}
// var fs = buildFunctions();
// fs[0]();
// fs[1]();
// fs[2]();

for (var i =0; i< 3; i++) {
    (()=>{
        var j = i
        setTimeout(function() {
            console.log(j);
        },  1000);
    })()  
}
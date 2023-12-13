var arr =["Be yourself; everyone else is already taken ― Oscar Wilde" , "So many books, so little time ― Frank Zappa" ,"A room without books is like a body without a soul ― Marcus Tullius Cicero","You only live once, but if you do it right, once is enough― Mae West"]
// console.log(arr.length);
// console.log(Math.random()*arr.length);
// console.log(Math.floor(Math.random()*arr.length));
// console.log(Math.trunc(Math.random()*arr.length));
// console.log(arr[Math.trunc(Math.random()*arr.length)]);
    
function start(){
    var randomIndex = Math.trunc(Math.random()*arr.length);
    var title = document.getElementById("title").innerHTML=(arr[randomIndex])
}
// var title = document.getElementById("title")


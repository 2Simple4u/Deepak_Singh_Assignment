function count_heads(flips){
    
    var heads=0;
    var result;
    for(var i=0; i<n; i++ ){
        result = Math.floor(Math.random()*2);
        if(result == 0){
            heads++;
        }
    }
    document.write("The outcome for heads is: "+ (heads/flips));
}
var n = Number(prompt("How many times do you want to flip the coin?"));
document.write("How many times do you want to flip the coin? " +n,"<br>");
count_heads(n);
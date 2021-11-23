function num(val){
    document.getElementById('result').value+=val;
}
function solve(){
    var value1= document.getElementById('result').value;
    let res = eval(value1);
    document.getElementById('result').value=res;	
}
function cleard(){
document.getElementById('result').value="";
}
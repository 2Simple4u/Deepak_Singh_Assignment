function newList(l, num) {
    var list = [];
    for (var i=0;i<l.length;++i) {
        list.push(l[i]);
        list.push(num[i]);
    }
    return list;
}
console.log(newList(['a','b','c'],[1,2,3]));
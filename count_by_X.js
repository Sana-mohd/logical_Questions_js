function countBy(x, n) {
    var z = [];
    var i=1;
    while (i<=n){
      var a=x*i
      z.push(a)
      i++
    }
  
    return z;
  }
console.log(countBy(2,5));
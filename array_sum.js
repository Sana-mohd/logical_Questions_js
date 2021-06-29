function getAverage(marks){
    var sum=0
    for (var i=0;i<marks.length;i++){
      sum+=marks[i]
    }
    var arg
    arg=sum/marks.length
    return parseInt(arg)
  }
console.log(getAverage([2,6,9,8,6,16,12,19,22,31]))
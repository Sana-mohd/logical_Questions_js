function sumStr(a,b) {
    switch (true) {
        case (a&&b)!="":
        return String(parseInt(a)+parseInt(b))
        case (a=="")&&(b==""):
        return "0"
        case a=="":
        return String(parseInt(b))
        case b=="":
        return String(parseInt(a))
   }
   
  }
console.log(sumStr("",""));
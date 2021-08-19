// let list=[20,30,45,60]
let dic={"savita":45,"sana":20,"anisha":60,"amla":30}
let new_d={}
let j=0
let new_arr=[]
for ( var i in dic){
    a=dic[i]
    new_arr.push(a)
}
new_arr.sort()
// console.log(new_arr.sort());
// console.log(new_arr);
while (j<new_arr.length){
    for ( i in dic){
        var a=dic[i]
        // console.log(a);
        if (a==new_arr[j]){
            // console.log(a);
            // console.log(list[j]);
            new_d[i]=a
        }
    }
    j+=1
}
console.log(new_d)


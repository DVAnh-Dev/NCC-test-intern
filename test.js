let a = [1,3,4,2,7,9,10,6,8]
let b =[1,3,9,11,5,7,13]

function callBack(arr ,number){
   let rerult = arr.findIndex((value)=>{
        return value == number
    })
    return rerult
}

function findNumber(arr , callBack){
    let rerult =[]
    rerult.push(arr[callBack(arr,1)])
    rerult.push(arr[callBack(arr,3)])
    rerult.push(arr[callBack(arr,7)])
    rerult.push(arr[callBack(arr,9)])
    return rerult

}

console.log(findNumber(a ,callBack));
console.log(findNumber(b ,callBack));
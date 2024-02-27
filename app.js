//Цикл должен проходится по массиву и просто выводить среднюю арифметическую
let numbers = [10, 15, 20, 25, 30];

for (let i = 0; i < numbers.length; i++) {
    let average = 0;
    average += numbers[i];
}
average = (10 + 15 + 20 + 25 + 30) / numbers.length;
console.log("Среднее значение в массиве:", average);



// const number = [1,2,3,4,5,6,7,8,9,10];
//
// function numberS(num) {
//     return num.filter()
// }


const findArif=(...arr) =>{
    let sum =0;
    let count =0
    for (let i = 0; i <arr.length ; i++) {
        if (arr[i] > 0){
            count++
            sum+=arr[i]
        }
    }
    console.log(sum/count)
}
findArif(2, -78, 45,4,-7,-6,-10, 26, 30, 8)



const nums =(num) =>{
    let date =0;
    for (let i = 0; i <num.length; i++){
        if (num[i]%2 === 0){
            date+=num[i]*num[i]
        }
    }
    console.log(date)
}
nums(8,5,2,3,9)


const getSimpleNam = (num) =>{
    if (num === 1){
        return false
    }else if (num === 2){
        return true
    }else  {
        for (let i = 2; i < num; i++){
            if (num % i === 0){
                return false
            }
        }
        return true
    }
}
console.log(getSimpleNam(5))
console.log(getSimpleNam(12))
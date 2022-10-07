function fibs (num) {
    let newArr = [0,1]
    for(i=0;i<num-2;i++){
            newArr.push(newArr[i]+newArr[i+1])
    }

    return newArr
}

console.log(fibs(8))

function fibsRec (num, newArr = [0,1], index = 0) {
    if(newArr.length === 8){
        return newArr
    }
    newArr.push(newArr[index]+newArr[index+1])
    index++
    return fibsRec(num, newArr, index)
}

console.log(fibsRec(8))

// function fibonacci(n){
//     if(n<2){
//         return n
//     }else{
//         return fibonacci(n-1) + fibonacci(n-2)
//     }
// }

// console.log(fibonacci(5))


function mergeSort(arr) {
    if(arr.length === 0 || arr.length === 1){
        return arr
    }
    let middle = Math.floor(arr.length / 2)
    let leftArr = mergeSort(arr.slice(0, middle))
    let rightArr = mergeSort(arr.slice(middle))
    let sorted = []
    let indexLeft = 0
    let indexRight = 0
    while (sorted.length < arr.length){
        if(leftArr[indexLeft] < rightArr[indexRight]){
            sorted.push(leftArr[indexLeft])
            indexLeft++
        }else{
            sorted.push(rightArr[indexRight])
            indexRight++
        }

        if(indexLeft === leftArr.length){
            Array.prototype.push.apply(sorted, rightArr.slice(indexRight))
            break;
        }else if (indexRight === rightArr.length){
            Array.prototype.push.apply(sorted, leftArr.slice(indexLeft))
            break;
        }
    }
    return sorted
}

console.log(mergeSort([4,8,6,2,1,7,5,3]))
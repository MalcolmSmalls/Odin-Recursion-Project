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


function fibs (num) {
    let newArr = [0,1]
    for(i=0;i<num-2;i++){
            newArr.push(newArr[i]+newArr[i+1])
    }

    return newArr
}

console.log(fibs(8))
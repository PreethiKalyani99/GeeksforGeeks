function isKthBitSet(number, k){
    let binaryNumber = number.toString(2)
    console.log(binaryNumber)
    let arr = binaryNumber.split('')
    let count = 0

    for(let i = arr.length - 1; i >= 0; i--){
        if(count === k){
            if(arr[i] === '1'){
                return true
            }
        }
        count++
    }
    return false
}

function printResult(number, k){
    let result = isKthBitSet(number, k)

    if(result){
        console.log('Yes')
    }
    else{
        console.log('No')
    }
}

printResult(500, 3)
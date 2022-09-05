const array = [1, 1 , 2, 3, 5, 8, 13]; 

function slice(arr, start, end) {
    const result = []
    let lastIndex = arr.length
if (end < 0 ) {
    lastIndex -= Math.abs(end)
}

    for (let i = start; i < lastIndex; i++) {
        result.push(arr[i])

}
return result
}


const res = slice(array, 2)
const res2 = slice(array, 2, 2)
console.log(res)
console.log(res2);
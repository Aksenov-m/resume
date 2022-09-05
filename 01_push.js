const array = [1, 1 , 2, 3, 5, 8, 13];

// array.push(21)

function push(arr, num) {
    arr[arr.length]= num
    return arr.length
}

const res = push(array, 42)
console.log(res)
console.log(array)
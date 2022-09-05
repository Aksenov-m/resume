const array = [1, 2, 3, 4, 5, 6, 7]


function concat(arr, sub = []) {
const copy = []

for (let i = 0; i < (arr.length + sub.length); i++ ) {
    if (i < arr.length) {
        copy[i] = arr[i]
    } else {
        copy[i] = sub[i - arr.length]
    }
    
}

// for (let i = 0; i < arr.length; i++ ) {
//     copy.push(sub[i])
// }

return copy
}


console.log(concat(array, next))
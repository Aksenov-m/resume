const array = [1, 2, 3, 4, 5, 6, 7]


function includes(arr, search, start = 0) {
const copy = arr.concat()

for (let i = 0; i < start; i++ ) {

        if (arr[i] === search) {
            return true
        }
 
    
}


return false
}


console.log(includes(array, 3))
console.log(includes(array, 3, 3))
// console.log(array)
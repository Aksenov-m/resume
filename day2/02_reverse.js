const array = [1, 2, 3, 4, 5, 6, 7]


function reverse(arr) {
const copy = arr.concat()

for (let i = 0; i < arr.length; i++ ) {
        
    arr[i] = copy[arr.length - 1 - i]
 
    
}


return arr
}


console.log(reverse(array))
console.log(array)
const array = [1, 2, 3, 4, 5, 6, 7]

function every(arr, fn) {
    for (let i = 0; i < arr.length; i++ ) {
        if (!fn(arr[i])) return false
        
    
     
        
    }
    return true
}
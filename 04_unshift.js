const array = [1, 1 , 2, 3, 5, 8, 13]; 

function unshift(arr, number) {
    const merged = [number, ...arr]
    for (let i = 0; i< merged.length; i++) {
        arr[i] = merged[i]

}
return arr.length
}


const newLenght = unshift(array, 42)
console.log(array)
console.log(newLenght);
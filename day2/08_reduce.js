const array = [1, 2, 3, 4, 5, 6, 7]

function reduceFn(acc, item) {
    return acc + item
}

const result = array.reduce(reduceFn, 0)
function hammingWeight(n) {
    const result = n.toString(2).split('1').length - 1
    console.log(result)

}
hammingWeight(4)
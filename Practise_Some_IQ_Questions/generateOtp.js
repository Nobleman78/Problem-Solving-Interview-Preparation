function generateOtp(digit = 6) {
    let otp = ''
    for (let i = 0; i < digit; i++) {
        otp = otp + Math.floor(Math.random() * 10);
    }
    return otp
}
const otp = generateOtp()
console.log(otp)

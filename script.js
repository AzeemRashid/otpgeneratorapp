const otpInputs = document.querySelectorAll('.otp-input');
const generateOtpButton = document.getElementById('generate-otp');

generateOtpButton.addEventListener('click', () => {
    const otp = generateOTP();
    displayOTP(otp);
});

function generateOTP() {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < 4; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
}

function displayOTP(otp) {
    otpInputs.forEach((input, index) => {
        input.value = otp[index];
    });
}

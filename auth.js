document.addEventListener('DOMContentLoaded', function() {
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    const emailForm = document.getElementById('emailForm');
    const phoneForm = document.getElementById('phoneForm');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            
            tabBtns.forEach(tab => tab.classList.remove('active'));
            emailForm.classList.remove('active');
            phoneForm.classList.remove('active');
            
            
            this.classList.add('active');
            if (this.dataset.tab === 'email') {
                emailForm.classList.add('active');
            } else {
                phoneForm.classList.add('active');
            }
        });
    });
    
    // Phone login form 
    const phoneFormEl = document.getElementById('phoneLoginForm');
    const otpGroup = document.querySelector('.otp-group');
    const phoneSubmitBtn = document.getElementById('phoneSubmitBtn');
    const resendOtpBtn = document.getElementById('resendOtp');
    let otpTimer;
    
    phoneFormEl.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const phoneNumber = document.getElementById('countryCode').value + document.getElementById('phone').value;
        
        if (phoneSubmitBtn.textContent === 'Send OTP') {
            // sending OTP
            console.log('OTP sent to', phoneNumber);
            
            
            otpGroup.classList.remove('hidden');
            phoneSubmitBtn.textContent = 'Verify OTP';
            
            
            startOtpTimer();
        } else {
            // Verify OTP
            const otp = document.getElementById('otp1').value +
                        document.getElementById('otp2').value +
                        document.getElementById('otp3').value +
                        document.getElementById('otp4').value +
                        document.getElementById('otp5').value +
                        document.getElementById('otp6').value;
            
            // OTP verification 
            if (otp.length === 6) {
                console.log('Verifying OTP:', otp);
                
                alert('Login successful!');
                
                window.location.href = 'index.html';
            } else {
                alert('Please enter a valid 6-digit OTP');
            }
        }
    });
    
    // OTP input 
    const otpInputs = document.querySelectorAll('.otp-input input');
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', function() {
            if (this.value.length === 1 && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        });
        
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && this.value.length === 0 && index > 0) {
                otpInputs[index - 1].focus();
            }
        });
    });
    
    // Resend OTP
    resendOtpBtn.addEventListener('click', function() {
        const phoneNumber = document.getElementById('countryCode').value + document.getElementById('phone').value;
        console.log('Resending OTP to', phoneNumber);
        startOtpTimer();
    });
    
    function startOtpTimer() {
        let timeLeft = 30;
        document.querySelector('.otp-timer').classList.remove('hidden');
        resendOtpBtn.classList.add('hidden');
        
        otpTimer = setInterval(() => {
            timeLeft--;
            document.getElementById('countdown').textContent = timeLeft;
            
            if (timeLeft <= 0) {
                clearInterval(otpTimer);
                document.querySelector('.otp-timer').classList.add('hidden');
                resendOtpBtn.classList.remove('hidden');
            }
        }, 1000);
    }
    
    
    window.addEventListener('beforeunload', function() {
        if (otpTimer) clearInterval(otpTimer);
    });
});
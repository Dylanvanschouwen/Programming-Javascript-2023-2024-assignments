document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('myModal');
    var btn = document.getElementById('ModalBtn');
    var span = document.getElementsByClassName('close')[0];
    var verifyBtn = document.getElementById('verifyAgeBtn');

    btn.onclick = function () {
        modal.style.display = 'block';
    };

    span.onclick = function () {
        modal.style.display = 'none';
    };
    
    verifyBtn.onclick = function () {
        var ageInput = document.getElementById('ageInput').value;
        if (ageInput !== '' && !isNaN(ageInput)) {
            var age = parseInt(ageInput);
            if (age >= 18) {
                window.location.href = 'https://www.example.com';
            }   
            else { document.body.innerHTML = '<div class="te-jong">je bent te jong sorry!</div>'; 
            }
        }
    }
});

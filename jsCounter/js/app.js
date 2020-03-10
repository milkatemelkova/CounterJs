(function(){

    let counterValue = 0;
    const buttons = document.querySelectorAll('.counterBtn');
    const counter = document.getElementById('counter');

    buttons.forEach(function(btn){
        btn.addEventListener('click', function(event) {
            // element that is clicked
            const value = event.target;

            //checking which button is clicked

            if(value.classList.contains('prevBtn')){
                counterValue--;
            } else if (value.classList.contains('nextBtn')){
                counterValue++;
            }
            counter.textContent = counterValue;

            // changing color
            if (counterValue === 0) {
                counter.style.color = "#333";
            } else if (counterValue < 0) {
                counter.style.color = "#F6511d";
            } else if (counterValue > 0) {
                counter.style.color = "#7fb000";
            }
        });
    });



})();
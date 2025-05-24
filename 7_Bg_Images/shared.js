var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoBtn = document.querySelector('.modal_action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');

// console.dir(backdrop);

// backdrop.style.display = 'block';

for (var i=0; i<selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

// backdrop.addEventListener('click', function() {
//     modal.style.display = 'none';
//     backdrop.style.display = 'none';
// });

// modalNoBtn.addEventListener('click', function() {
//     modal.style.display = 'none';
//     backdrop.style.display = 'none';
// });

// best way

function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
};

backdrop.addEventListener('click', closeModal);

modalNoBtn.addEventListener('click', closeModal);
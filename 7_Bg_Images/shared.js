var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoBtn = document.querySelector('.modal_action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleBtn = document.querySelector('.toggle-button');
var mobNav = document.querySelector('.mobile-nav');

// console.dir(backdrop);
// console.dir(backdrop.style.zIndex);
// console.dir(backdrop.style['z-index']);

// backdrop.style.display = 'block';

for (var i=0; i<selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';

        // modal.className = 'open'; // This will actually overwrite the complete class list

        modal.classList.add('open');
        backdrop.classList.add('open');
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
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';

    modal.classList.remove('open');
    backdrop.classList.remove('open');
};

backdrop.addEventListener('click', function(){
    // mobNav.style.display = 'none';
    mobNav.classList.remove('open');
    closeModal();
});

modalNoBtn.addEventListener('click', closeModal);

toggleBtn.addEventListener('click', function(){
    // mobNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobNav.classList.add('open');
    backdrop.classList.add('open');
});
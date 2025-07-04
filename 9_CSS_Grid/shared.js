var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoBtn = document.querySelector('.modal_action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleBtn = document.querySelector('.toggle-button');
var mobNav = document.querySelector('.mobile-nav');
var ctaBtn = document.querySelector('.main-nav_item-cta');

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
        backdrop.style.display = 'block';
        setTimeout(function() {
            backdrop.classList.add('open');
        }, 10);
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
    if(modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    setTimeout(function() {
        backdrop.style.display = 'none';
    }, 200);
};

backdrop.addEventListener('click', function(){
    // mobNav.style.display = 'none';
    mobNav.classList.remove('open');
    closeModal();
});

if (modalNoBtn){
    modalNoBtn.addEventListener('click', closeModal);
}

toggleBtn.addEventListener('click', function(){
    // mobNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(function() {
        backdrop.classList.add('open');
    }, 10);
});

ctaBtn.addEventListener('animationstart', function(event) {
    console.log('Animation Started', event);
});

ctaBtn.addEventListener('animationend', function(event) {
    console.log('Animation End', event);
});

ctaBtn.addEventListener('animationiteration', function(event) {
    console.log('Animation Iteration', event);
});
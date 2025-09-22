// select beckdrop (by finding first element with .backdrop css selector)
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalCloseButton = document.querySelector('.modal__action--negative');
var selectPlanButton = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// console.dir(selectPlanButton);

function closeModal() {
  // backdrop.style.display = 'none';
  // modal.style.display = 'none';
  modal.classList.remove('open');
  backdrop.classList.remove('open');
}

selectPlanButton.forEach(button => {
  button.addEventListener('click', function() {
    // backdrop.style.display = 'block'; // alternate way using style
    // modal.style.display = 'block';
    modal.classList.add('open');
    backdrop.classList.add('open');
  })
});

backdrop.addEventListener('click', () => {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  closeModal();
});

modalCloseButton.addEventListener('click', closeModal);
toggleButton.addEventListener('click', () => {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});


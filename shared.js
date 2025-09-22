// select beckdrop (by finding first element with .backdrop css selector)
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalCloseButton = document.querySelector('.modal__action--negative');
var selectPlanButton = document.querySelectorAll('.plan button')

// console.dir(selectPlanButton);

function closeModal() {
  backdrop.style.display = 'none';
    modal.style.display = 'none';
}

selectPlanButton.forEach(button => {
  button.addEventListener('click', function() {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
  })
});

backdrop.addEventListener('click', closeModal);
modalCloseButton.addEventListener('click', closeModal);


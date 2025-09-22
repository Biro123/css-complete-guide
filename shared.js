// select beckdrop (by finding first element with .backdrop css selector)
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButton = document.querySelectorAll('.plan button')

// console.dir(selectPlanButton);

selectPlanButton.forEach(button => {
  button.addEventListener('click', function() {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
  })
})


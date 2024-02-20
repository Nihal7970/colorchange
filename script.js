document.addEventListener('DOMContentLoaded', function () {
  let buttons = document.querySelectorAll('.p');
  let body = document.body;

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      body.style.backgroundColor = e.target.style.backgroundColor;
    });
  });
});
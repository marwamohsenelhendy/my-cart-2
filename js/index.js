const buttons = document.querySelectorAll('.number-btn');
const decrementBtn = document.querySelectorAll('.decrement-btn');
const incrementBtn = document.querySelectorAll('.increment-btn');

incrementBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    let quantity = btn.closest('.quantity').querySelector('.number-btn');
    let amount = +(quantity.textContent);
    if (amount < 9) {
      amount++;
    }
    quantity.textContent = amount;

  })
})
decrementBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    let quantity = btn.closest('.quantity').querySelector('.number-btn');
    let amount = +(quantity.textContent);
    if (amount > 1) {
      amount--;
    }
    quantity.textContent = amount;
  })
})





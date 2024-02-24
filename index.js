const sliderEl = document.querySelector('#pageview');
const toggleBtn = document.querySelector('.billing__button-container button');
const pageviews = document.querySelector('.viewcount');
const costTotal = document.querySelector('.component__pricing-total .value');

const pageviewPackages = [
  { view: '10K', cost: 8 },
  { view: '50K', cost: 12 },
  { view: '100K', cost: 16 },
  { view: '500K', cost: 24 },
  { view: '1M', cost: 36 },
];

const DISCOUNT = 0.25;

function changeViewData(object, i) {
  return object[i][1].view;
}
function changeCostData(object, i) {
  const cost = object[i][1].cost;
  const yearlyCost = object[i][1].cost * 12 * (1 - DISCOUNT);
  const costWithDecimals = cost.toFixed(2);
  return '$' + costWithDecimals;
}

function displayCostData(progress) {
  const obj = Object.entries(pageviewPackages);

  switch (progress) {
    case 0: {
      pageviews.innerHTML = changeViewData(obj, 0);
      costTotal.innerHTML = changeCostData(obj, 0);
      break;
    }
    case 25: {
      pageviews.innerHTML = changeViewData(obj, 1);
      costTotal.innerHTML = changeCostData(obj, 1);
      break;
    }
    case 50: {
      pageviews.innerHTML = changeViewData(obj, 2);
      costTotal.innerHTML = changeCostData(obj, 2);
      break;
    }
    case 75: {
      pageviews.innerHTML = changeViewData(obj, 3);
      costTotal.innerHTML = changeCostData(obj, 3);
      break;
    }
    case 100: {
      pageviews.innerHTML = changeViewData(obj, 4);
      costTotal.innerHTML = changeCostData(obj, 4);
      break;
    }
  }
}

sliderEl.addEventListener('input', () => {
  const sliderProgress = (sliderEl.value / sliderEl.max) * 100;

  displayCostData(sliderProgress);

  sliderEl.style.background = `linear-gradient(
    to right,
    var(--clr-primary-dark) ${sliderProgress}%,
    var(--clr-neutral-light) ${sliderProgress}%
  )`;
});

toggleBtn.parentElement.addEventListener('click', () => {
  toggleBtn.classList.toggle('toggled');
});

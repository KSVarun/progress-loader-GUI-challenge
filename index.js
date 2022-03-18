const incBtn = document.getElementById('inc-btn');
const decBtn = document.getElementById('dec-btn');
const resetBtn = document.getElementById('reset-btn');
const loadBtn = document.getElementById('load-btn');
const completeBtn = document.getElementById('complete-btn');
const loaderLine = document.getElementById('loader-line');

function sleep(time) {
  return new Promise((res, rej) => {
    setTimeout(() => res(), time);
  });
}

// 400 is 0
const sleepTime = 100;
let initialLoad = true;

loadBtn.addEventListener('click', () => {
  loaderLine.style.strokeDasharray = '400';
  if (loaderLine.classList.contains('load')) {
    loaderLine.classList.remove('load');
    return;
  }
  loaderLine.classList.add('load');
});

incBtn.addEventListener('click', async () => {
  if (loaderLine.classList.contains('load')) {
    loaderLine.classList.remove('load');
    await sleep(sleepTime);
    loaderLine.style.strokeDasharray = '466';
    return;
  }
  const currentProgress = loaderLine.style.strokeDasharray;
  if (Number(currentProgress) === 0) {
    loaderLine.style.strokeDasharray = '466';
    return;
  }
  if (Number(currentProgress) < 790) {
    loaderLine.style.strokeDasharray = `${Number(currentProgress) + 66}`;
  }
});

decBtn.addEventListener('click', () => {
  initialLoad = false;
  if (loaderLine.classList.contains('load')) {
    loaderLine.classList.remove('load');
    return;
  }
  const currentProgress = loaderLine.style.strokeDasharray;
  if (Number(currentProgress) > 400) {
    loaderLine.style.strokeDasharray = `${Number(currentProgress) - 66}`;
  }
});

completeBtn.addEventListener('click', async () => {
  initialLoad = false;
  if (loaderLine.classList.contains('load')) {
    loaderLine.classList.remove('load');
  }
  await sleep(sleepTime);
  loaderLine.style.strokeDasharray = '790';
});

resetBtn.addEventListener('click', async () => {
  initialLoad = false;
  if (loaderLine.classList.contains('load')) {
    loaderLine.classList.remove('load');
  }
  await sleep(sleepTime);
  loaderLine.style.strokeDasharray = '400';
});

async function init() {
  loadBtn.click();
  await sleep(2000);
  for (i = 0; i < 6; i++) {
    if (initialLoad) {
      incBtn.click();
      await sleep(1000);
    }
  }
}

init();

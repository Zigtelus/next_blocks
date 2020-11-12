


const quantityItemsMaxWidth = 20; //количество ячеек на странице при максимальной ширине
const quantityItems1399 = 16;
const quantityItems1100 = 12;
const quantityItems760 = 8;


let quantityItems = quantityItemsMaxWidth;


const getWidthClient = () => {

  const maxWidth = [1399, 1100, 760]; //разрешения экранов
  for (let i = 0; i < maxWidth.length; i++ ) {
    if (window.matchMedia('(max-width: ' + maxWidth[i] + 'px)').matches) {
      quantityItems = eval('quantityItems' + maxWidth[i]);
    };
  };

  return quantityItems
}
getWidthClient()

const btnPrev = document.querySelector('.buttons .prev');
const btnNext = document.querySelector('.buttons .next');
const items = document.querySelectorAll('.tabs-collection__item');
btnNext.id = quantityItems;


for (let e = 0; e < quantityItems; e++) {
  items[e].style.display = 'block';
}


const getNextItems = (namber, maxNumber, status) => {
  let j = 0
  for (j = namber; j < maxNumber; j++) {
    if (j < items.length) {
      items[j].style.display = status
    };
  };
  return j
}

btnNext.onclick = function () {
  if (this.id > 1 && this.id < items.length) {


    btnPrev.id = Number(this.id);
    this.id = Number(this.id) + quantityItems;

    getNextItems(this.id - quantityItems*2, this.id - quantityItems, 'none');
    getNextItems(this.id - quantityItems, this.id, 'block');


  };
}

btnPrev.onclick = function () {
  if (this.id > 1) {


    getNextItems(this.id - quantityItems, this.id, 'block');
    getNextItems(this.id, this.id + quantityItems, 'none');


    this.id -= quantityItems;
    btnNext.id -= quantityItems;


  };
}
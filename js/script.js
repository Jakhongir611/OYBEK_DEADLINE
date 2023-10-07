let doc = document;
let body = doc.body;
let div = doc.createElement('div');
let catalog = doc.createElement('catalog');
let vibor = doc.createElement('vibor');
let market_phone = doc.querySelector('.market_phone');
let market_pc = doc.querySelector('.market_pc');

catalog.addEventListener('click', () => {
    vibor.classList.remove('none');
})

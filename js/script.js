let doc = document;
let body = doc.body;
let catalog = doc.querySelector('.catalog');
let vibor = doc.querySelector('.vibor');
let btn_tel = doc.querySelector('.tel');
let btn_pc = doc.querySelector('.pc');
let market_phone = doc.querySelector('.market_phone');
let market_pc = doc.querySelector('.market_pc');

catalog.addEventListener('click', () => {
    vibor.classList.remove('none');
})

btn_tel.addEventListener('click', () => {
    market_pc.classList.add('none');
    market_phone.classList.remove('none');
    vibor.classList.add('none')
})
btn_pc.addEventListener('click', () => {
    market_phone.classList.add('none');
    market_pc.classList.remove('none');
    vibor.classList.add('none')
})

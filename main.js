const btnFilter = document.querySelectorAll('.btn-filter');
const menuItem = document.querySelectorAll('.menu-item');


const items = [
    {
        type: 'breakfast',
        selector: '.menu-item.breakfast',
    },
    {
        type: 'lunch',
        selector: '.menu-item.lunch',
    },
    {
        type: 'shakes',
        selector: '.menu-item.shakes',
    },
    {
        type: 'dinner',
        selector: '.menu-item.dinner',
    }
];
btnFilter[0].addEventListener('click', ()=>{
    document.querySelectorAll('.menu-item').forEach((element) => {
        element.classList.remove('hidden');
        element.classList.add('show');
    });
})
btnFilter[1].addEventListener('click', ()=>{
    filterItem(0);
})
btnFilter[2].addEventListener('click', ()=>{
    filterItem(1);
})
btnFilter[3].addEventListener('click', ()=>{
    filterItem(2);
})
btnFilter[4].addEventListener('click', ()=>{
    filterItem(3);
})

function filterItem(itemIndex){
    const itemSelect = items[itemIndex];


    document.querySelectorAll('.menu-item').forEach((element) => {
        element.classList.add('hidden');
        element.classList.remove('show');

    });

    document.querySelectorAll(itemSelect.selector).forEach((element) => {
        element.classList.add('show');
        element.classList.remove('hidden');
    });
}
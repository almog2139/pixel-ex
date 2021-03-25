import { utilService } from './utilService.js'
export const itemService = {
    query,
}

const items = [
    {
        id: utilService.makeId(),
        title: 'Seared Salmon Fillet',
        desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
        imgUrl: 'menu-item1'
    },
    {
        id: utilService.makeId(),
        title: 'Rosemary Filet Mignon',
        desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
        imgUrl: 'menu-item2'

    },
    {
        id: utilService.makeId(),
        title: 'Summer Fruit Chocolate Mousse',
        desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
        imgUrl: 'menu-item3'

    },

]



function query() {
    return items
}
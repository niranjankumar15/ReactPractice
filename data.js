const itemList = [{
    id:'fruits', type: 'plants', description: 'Fruits Name',
    names: ['apple', 'banana', 'mango', 'Mulberry']
}, {
    id:'misc', type: 'misc', description: 'Miscellaneous',
    names: ['magic', 'disco', 'movie']
}, {
    id:'birds', type: 'aves', description: 'Birds Name',
    names: ['pigeon', 'parrot', 'duck', 'swan', 'sparrow', 'crow']
}]


const martList = [{
    id: 1, label:'fruits', category: 'fruits', description: 'Fruits',
    names: ['apple', 'banana', 'mango', 'Melon', 'dragon'],
    prices: ['240', '60', '150', '100', '150'],
    units: ['kg', 'dozen', 'kg', 'Pcs', 'pcs']
}, {
    id: 2, label:'misc', category: 'misc', description: 'Miscellaneous',
    names: ['magic', 'disco', 'movie'],
    prices: ['1500', '3000', '500'],
    units: ['show', 'timing', 'cinema']
}, {
    id:3, label:'staples', category: 'staples', description: 'Groceries',
    names: ['Rice', 'Flour', 'Pulses', 'Oil'],
    prices: ['100', '50', '200', '170'],
    units: ['kg', 'pkt', 'kg', 'Ltr']
}, {
    id:3, label:'staples', category: 'staples', description: 'New Groceries',
    names: ['Daliya', 'Spices', 'Noodles', 'Soap'],
    prices: ['100', '50', '200', '170'],
    units: ['kg', 'pkt', 'kg', 'Ltr']
}, {
    id:4, label:'beverages', category: 'drinks', description: 'Drinks',
    names: ['cold drinks', 'juices', 'milk'],
    prices: ['80', '200', '100'],
    units: ['Bottle', 'Pkt', 'Ltr']
}, {
    id:5, label:'confectioneries', category: 'food', description: 'Junk Foods',
    names: ['Chips', 'Chocolates', 'Wafers'],
    prices: ['30', '90', '50'],
    units: ['Pkt', 'Pcs', 'Pkt']
},{
    id:6, label:'confectioneries', category: 'food', description: 'Junk Foods',
    names: ['Cakes', 'Choco Pies', 'Muffins', 'Donuts'],
    prices: ['30', '90', '50', '150'],
    units: ['Pcs', 'Pkt', 'Pcs', 'Pcs']
}]

const itemListAll = [
    {id:0, type: 'fruits', name: 'apple', description: 'winter'},
    {id:1, type: 'fruits', name: 'banana', description: 'all'}, 
    {id:2, type: 'fruits', name: 'mango', description: 'summer'}, 
    {id:3, type: 'fruits', name: 'Mulberry', description: 'rainy'},
    {id:4, type: 'misc', name: 'magic', description: 'moments'},
    {id:5, type: 'misc', name: 'disco', description: 'dancer'}, 
    {id:6, type: 'misc', name: 'movie', description: 'Johny'},
    {id:7, type: 'birds', name: 'pigeon', description: 'nest'},
    {id:8, type: 'birds', name: 'parrot', description: 'cage'}, 
    {id:9, type: 'birds', name: 'duck', description: 'water'}
]

// export {itemList, itemListAll, martList}
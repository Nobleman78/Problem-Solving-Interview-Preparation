const category = {
    _id: '12345',
    title: 'Food Menu',
    Des: 'This is food category',
    salads: ['Greek Salad', 'Caesear Salad', 'Cobb Salad'],
    pizzas: ['Margherita', 'Pepperoni', 'BBQ Chicken']
}
const newR={
    title:'jesmin chakma'
}


const listName = Object.keys(category).filter(key =>
    Array.isArray(category[key]) && key !== '_id' && key !== 'Des' && key !== 'title'
)

const values = Object.keys(category).filter(key =>
    Array.isArray(category[key]) && key !== '_id' && key !== 'Des' && key !== 'title'
).map(value => category[value])


const onlyKeys = Object.keys(category)
const onlyValues = Object.values(category)
// Both Key and values

const bothValues = Object.entries(category).filter(([key, value]) =>
    Array.isArray(value) && key !== '_id' && key !== 'Des' && key !== 'title'
)
console.log(bothValues)
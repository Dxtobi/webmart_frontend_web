
const categories = ['Electronics', 'Care', 'Foot Wears', 'T-shirts', 'Gadgets']
   
const filter = {
    tags: ["Computers",
"Sports &amp; Fitness",
"Women's Fashion",
"Grocery",
"Cameras",
"Televisions",
"Fiction Books",
"Exam Books",
"Desktops",
"Laptops",
"Sports Collectibles ",
"Strength Training ",
"Ethnic Wear",
"Western Wear",
"Dry Fruits, Nuts &amp; Seeds",
"Health Drink Mix",],
    location: ['Lagos', 'Abuja', 'Aba', 'Enugu', 'Ghana', 'Cotonou',],
    brands: ['Hundoci', 'Balablu', 'Bulabla', 'Samsung', 'Toyoter', 'Gucci',],
}

const data = [
    {
        title: 'title1',
        images: ['/favicon.png', '/favicon.png', '/favicon.png'],
        price: 1000,
        inStock:true
    },
    {
        title: 'title2',
        images: ['/favicon.png', '/favicon.png', '/favicon.png'],
        price: 1000,
        inStock:true
    },
    {
        title: 'title3',
        images: ['/favicon.png', '/favicon.png', '/favicon.png'],
        price: 1000,
        inStock:true
    },
    {
        title: 'title4',
        images: ['/favicon.png', '/favicon.png', '/favicon.png'],
        price: 1000,
        inStock:true
    },
    {
        title: 'title5',
        images: ['/favicon.png', '/favicon.png', '/favicon.png'],
        price: 1000,
        inStock:true
    },
    {
        title: 'title6',
        images: ['/favicon.png', '/favicon.png', '/favicon.png'],
        price: 1000,
        inStock:true
    },
    {
        title: 'title7',
        images: ['/favicon.png', '/favicon.png', '/favicon.png'],
        price: 1000,
        inStock:true
    },
    {
        title: 'title8',
        images: ['/favicon.png', '/favicon.png', '/favicon.png'],
        price: 1000,
        inStock:true
    },
    {
        title: 'title9',
        images: ['/favicon.png', '/favicon.png', '/favicon.png'],
        price: 1000,
        inStock:true
    },
    {
        title: 'title10',
        images: ['/favicon.png', '/favicon.png', '/favicon.png'],
        price: 1000,
        inStock:true
    },
    {
        title: 'title11',
        images: ['/favicon.png', '/favicon.png', '/favicon.png'],
        price: 1000,
        inStock:true
    },
    {
        title: 'title12',
        images: ['/favicon.png', '/favicon.png', '/favicon.png'],
        price: 1000,
        inStock:true
    }
]
export const load = async () => {
    return {
        categories, products:data, filter
    }
}
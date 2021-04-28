const user = [
    {
        id: 1,
        email: 'ruja_prijedor@hotmail.com',
        password: 'test123'
    },
    {
        id: 2,
        email: 'test@gmail.com',
        password: 'test'
    }
]


const customer = [
    {
        id: 1,
        name: 'Aleksandar',
        lastName: 'Rujevic',
        email: 'ruja_prijedor@hotmail.com',
        postalCode:'79101'


    },
    {
        id: 2,
        name: 'Demo',
        lastName: 'Demo',
        email: 'demo@gmail.com',
        postalCode:'71010'
    },
    {
        id: 3,
        name: 'Test',
        lastName: 'Test',
        email: 'test@gmail.com',
        postalCode:'79101'
    }
]

const sellingArticles = [
    {
        id: 1,
        title: 'Armani Code',
        summary: 'Armani Code by Giorgio Armani is a Amber Spicy fragrance for men. Armani Code was launched in 2004. The nose behind this fragrance is Antoine Lie. Top notes are Lemon and Bergamot; middle notes are Star Anise, Olive Blossom and Guaiac Wood; base notes are Leather, Tonka Bean and Tobacco. This perfume is the winner of award FiFi Award Fragrance Of The Year Men`s Luxe 2006.',
        price: 159.99,
        photo: 'https://fimgs.net/mdimg/perfume/375x500.412.jpg',


    },
    {
        id: 2,
        title: 'Sauvage Dior',
        summary: 'Sauvage is an act of creation inspired by wide-open spaces. An ozone blue sky that dominates a white-hot rocky landscape',
        price: 129.99,
        photo: 'https://s3.eu-central-1.amazonaws.com/cnj-img/images/hO/hOlb1bOA6pwa'
    }
]

module.exports = { user, customer, sellingArticles }
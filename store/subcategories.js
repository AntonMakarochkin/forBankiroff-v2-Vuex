export const state = () => ({
    classic: [
        {
            name: 'classic', 
            id: 'classic',
            price: '100',
            data: {price:1500, title:'War and Peace', text:'описание', id: '/books/classic/war-and-peace', img: 'https://img4.labirint.ru/rc/b403db3382fb5bda3f344f0c8adf9d3c/220x340/books49/488632/cover.jpg?1612689915' },
            data2: {img: 'https://cv7.litres.ru/pub/c/elektronnaya-kniga/cover_max1500/24312573-ivan-turgenev-otcy-i-deti-24312573.jpg', price:1000, title:'Fathers and Sons', text:'описание', id: '/books/classic/fathers-and-sons'},
               
            

        },
        
        
        
    ],
    adventure: [
        {
            name: 'adventure',
            id: 'adventure',
            price: '200',
            data2:   {price:'1500', title:'Journey to the Center of the Earth', text:'описание', id: '/books/adventure/journey-to-the-center-of-the-planet svift', img: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/i/m/img936_1_4.jpg'},
            data:  {price:'1000', title:'Gulliver Travels', text:'описание', id: '/books/adventure/gulliver-travels', img: 'https://i.pinimg.com/originals/fb/e7/e9/fbe7e91768141703a7c2300c8f8e05a9.jpg'},
            
            
        },
    ],
    iphone: [
        {
            name: 'iphone',
            id: 'iphone',
            data:  {img: 'https://images.biggeek.ru/1/435/4347/7220-721xsmax_silver.jpg', price:'60000', title:'Iphone10', text:'описание'},
            data2: {img: 'https://images.biggeek.ru/1/435/54e3/3217-1727_rose.jpg', price:'45000', title:'Iphone6', text:'описание' },
        },
       
    ],
    android: [
        {
            name: 'android',
            id: 'android',
            data: {img: 'https://images.biggeek.ru/1/435/a39e/11042-365grey_20_min.jpg', price:'50000', title:'Samsung S20', text:'описание',},
            data2: {img: 'https://images.biggeek.ru/1/435/effd/10902-551ru-galaxy-a51-a515-sm-a515fzkmser-front-199712181.jpeg', price:'25000', title:'Samsung A5', text:'описание', },
        }
    ]
        
    
})
export const getters = {
    getClassic: state => state.classic,
    getAdventure: state => state.adventure,
    getIphone: state => state.iphone,
    getAndroid: state => state.android,
}
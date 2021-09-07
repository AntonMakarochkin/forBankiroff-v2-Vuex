export const state = () => ({
    classic: [
        {price:1500, title:'War and Peace', text:'описание', id: 'war-and-peace', img: 'https://img4.labirint.ru/rc/b403db3382fb5bda3f344f0c8adf9d3c/220x340/books49/488632/cover.jpg?1612689915' },
        {img: 'https://cv7.litres.ru/pub/c/elektronnaya-kniga/cover_max1500/24312573-ivan-turgenev-otcy-i-deti-24312573.jpg', price:1000, title:'Fathers and Sons', text:'описание', id: 'fathers-and-sons'},
    ],
    
    adventure: [
           {price:'1500', title:'Journey to the Center of the Earth', text:'описание', id: 'journey-to-the-center-of-the-planet', img: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/i/m/img936_1_4.jpg'},
           {price:'1000', title:'Gulliver Travels', text:'описание', id: 'gulliver-travels', img: 'https://i.pinimg.com/originals/fb/e7/e9/fbe7e91768141703a7c2300c8f8e05a9.jpg'},
    ],
    
    iphone: [
           {img: 'https://images.biggeek.ru/1/435/4347/7220-721xsmax_silver.jpg', price:'60000', title:'Iphone10', text:'описание', id: 'iphone10'},
           {img: 'https://images.biggeek.ru/1/435/54e3/3217-1727_rose.jpg', price:'45000', title:'Iphone6', text:'описание', id: 'iphone6' },
    ],
       
    android: [
          {img: 'https://images.biggeek.ru/1/435/a39e/11042-365grey_20_min.jpg', price:'50000', title:'Samsung S20', text:'описание', id: 'samsungs20'},
          {img: 'https://images.biggeek.ru/1/435/effd/10902-551ru-galaxy-a51-a515-sm-a515fzkmser-front-199712181.jpeg', price:'25000', title:'Samsung A5', text:'троечка', id: 'samsunga5' },
    ],
    
})

//-- В мутациях скорее всего нужна динамическая переменная, но у меня возникли проблемы с ее установкой

export const mutations = {
    sortMinClassic(state) {
        state.classic = state.classic.sort(function(a, b) {return a.price - b.price})
    },
    sortMaxClassic(state) {
        state.classic = state.classic.sort((a, b) =>b.price - a.price )
    },
    sortNameClassic(state) {
        state.classic = state.classic.sort(function(a, b){
            if(a.title < b.title) { return -1; }
            if(a.title > b.title) { return 1; }
            return 0;})
    },
    sortMinAdventure(state) {
        state.adventure = state.adventure.sort(function(a, b) {return a.price - b.price})
    },
    sortMaxAdventure(state) {
        state.adventure = state.adventure.sort((a, b) =>b.price - a.price )
    },
    sortNameAdventure(state) {
        state.adventure = state.adventure.sort(function(a, b){
            if(a.title < b.title) { return -1; }
            if(a.title > b.title) { return 1; }
            return 0;})
    },
    sortMinIphone(state) {
        state.iphone = state.iphone.sort(function(a, b) {return a.price - b.price})
    },
    sortMaxIphone(state) {
        state.iphone = state.iphone.sort((a, b) =>b.price - a.price )
    },
    sortNameIphone(state) {
        state.iphone = state.iphone.sort(function(a, b){
            if(a.title < b.title) { return -1; }
            if(a.title > b.title) { return 1; }
            return 0;})
    },
    sortMinAndroid(state) {
        state.android = state.android.sort(function(a, b) {return a.price - b.price})
    },
    sortMaxAndroid(state) {
        state.android = state.android.sort((a, b) =>b.price - a.price )
    },
    sortNameAndroid(state) {
        state.android = state.android.sort(function(a, b){
            if(a.title < b.title) { return -1; }
            if(a.title > b.title) { return 1; }
            return 0;})
    },

}


export const getters = {
    getClassic: state => state.classic,
    getAdventure: state => state.adventure,
    getIphone: state => state.iphone,
    getAndroid: state => state.android,

}
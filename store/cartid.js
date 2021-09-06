export const state = () => ({
    cartid: [
        {
            name: 'classic', 
            id: '1',
            price: '100',
               
        },
        {
            name: 'classic', 
            id: '2',
            price: '100',
               
        },
        
    ],
   
        
    
})
export const getters = {
    getCartid: state => state.cartid
 
}
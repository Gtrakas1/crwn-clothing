import cartActionType from './cart.types.js'

export const setCartAction = () => ({
    type: cartActionType.SETCARTACTION,
})

export const addItem = item => ({
    type: cartActionType.ADD_ITEM,
    payload: item
})


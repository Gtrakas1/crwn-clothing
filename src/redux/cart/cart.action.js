import cartActionType from './cart.types.js'

export const setCartAction = () => ({
    type: cartActionType.SETCARTACTION,
})

export const addItem = item => ({
    type: cartActionType.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: cartActionType.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: cartActionType.CLEAR_ITEM_FROM_CART,
    payload: item
})



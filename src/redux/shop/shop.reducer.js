import SHOP_DATA from "./shop.data";

const INITIAL_SCALE = {
    collections: SHOP_DATA
}
const shopReducer = (state = INITIAL_SCALE, action) => {
    switch (action.type) {

        default:
            return state;


    }
};

export default shopReducer
/**
 * userCart = [{total: number, itemsDetail: {}}]
 */
const initializeState = () => {
    if (localStorage.getItem('USER_CART')) {
        return JSON.parse(localStorage.getItem('USER_CART'));
    }
    localStorage.setItem("USER_CART", null);
    return [];
}
const addItem = (item, number) => {
    let userCart = JSON.parse(localStorage.getItem('USER_CART'));
    if (userCart === null) {
        userCart = [{ total: 1, itemsDetail: {...item } }]
        localStorage.setItem('USER_CART', JSON.stringify(userCart))
        return userCart;
    } else {
        let check = false;
        const obj = userCart.slice();
        userCart = obj.map(element => {
            if (element.itemsDetail["ePProductVarietyID"] == item["ePProductVarietyID"]) {
                check = true;
                element.total = element.total + number;
            }
            return element;
        })
        if (!check) {
            userCart.push({ total: 1, itemsDetail: item });
        }
        localStorage.setItem('USER_CART', JSON.stringify(userCart));
        return userCart;
    }
}
const removeItem = (id) => {
    const listItems = JSON.parse(localStorage.getItem('USER_CART'));
    const updateListItem = listItems.filter(item => item.itemsDetail.ePProductVarietyID != id)
    localStorage.setItem('USER_CART', JSON.stringify(updateListItem));
    return updateListItem;
}

export const cartReducers = (state = { userCart: initializeState() }, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            {

                const orderedItem = action.payload.data;
                const number = action.payload["number"];
                const newState = addItem(orderedItem, !number || number <= 0 ? 1 : number);
                return {...state, userCart: [...newState] }
            }
        case 'REMOVE_ITEM':
            {
                const removeIdItemID = action.payload;
                const newState = removeItem(removeIdItemID);
                return {...state, userCart: [...newState] }
            }
        default:
            return state;
    }
}
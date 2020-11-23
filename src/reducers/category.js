export const categoryReducer = (state = { list: [] }, action) => {
    switch (action.type) {
        case 'GET_ALL':
            {
                console.log("reducer call")
                return {...state,
                    list: action.payload
                };
            }

        default:
            return state;
    }
}
export default function reducer(state = [], action) {
    // TODO: Change strings to constants;
    switch (action.type) {
        case "SHOW_CART_MODAL": {
            return {
                ...state,
                isVisible: action.isVisible
            }
        }
        case "HIDE_CART_MODAL": {
            return {
                ...state,
                isVisible: action.isVisible
            }
        }
        default:
            return state;
    }

}
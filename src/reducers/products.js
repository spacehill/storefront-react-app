export default function reducer(state = { items: [] }, action) {
    // TODO: Change strings to constants;

    switch (action.type) {
        case 'ITEMS_ARE_LOADING': {
            return {
                ...state,
                itemsAreLoading: action.isLoading
            };
        }
        case 'ITEMS_HAVE_ERROR': {
            return {
                ...state,
                itemsHaveError: action.hasError
            }
        }
        case "ITEMS_FETCH_DATA_SUCCESS": {
            if (state.items.length === 0) {
                return {
                    ...state,
                    items: action.items
                }
            }
            break;
        }
        case "SET_SELECTED_PRODUCT": {
            return {
                ...state,
                selectedItem: action.payload
            }
        }
        default:
            return state;
    }

    return state;
}
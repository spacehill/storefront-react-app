export default function reducer(state = [], action) {
    // TODO: Change strings to constants;
    switch (action.type) {
        case "ADD_TO_CART": {
            return [
                ...state, action.payload
            ];
        }

        case "UPDATE_QUANTITY": {
            return state.map((item, index) => {
                if (index !== action.index) {
                    return item;
                }

                return [
                    ...state,
                    ...action.payload
                ]
            });
        }

        case "REMOVE_FROM_CART": {
            const itemIndex = state.findIndex(i => i.title === action.payload.title);
            state = state.filter((item, index) => index !== itemIndex);
            return [
                ...state
            ]
        }
        default:
            return state;
    }
}
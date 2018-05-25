export function showCartModal() {
    console.log("fired");
    return {
        type: "SHOW_CART_MODAL",
        isVisible: true
    }
}

export function hideCartModal() {
    return {
        type: "HIDE_CART_MODAL",
        isVisible: false
    }
}

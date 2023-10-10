function Cart(props) {
    console.log(props);
    return `You bought ${props.product.quantity} ${props.product.name} for a total of €${props.calculate(props.product)}`;
}

export default Cart;
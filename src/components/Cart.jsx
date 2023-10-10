function Cart({ product, calculate }) {
    // console.log(props);
    // const { product, calculate } = props; 
    return `You bought ${product.quantity} ${product.name} for a total of €${calculate(product)}`;
}

export default Cart;
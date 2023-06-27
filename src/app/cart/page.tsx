import CartList from './CartList/CartList';
import Summary from './Summary/Summary';
import styles from './cart.module.css';

export default function Cart () {
    return (
        <div className={styles.cart}>
            <CartList />
            <Summary />
        </div>
    )
}

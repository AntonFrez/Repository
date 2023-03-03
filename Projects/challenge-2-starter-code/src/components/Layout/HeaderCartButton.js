import { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'
import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = (props) => {

    const [isbuttonAnimated, setIsbuttonAnimated] = useState(false)

    const cartContext = useContext(CartContext)

    const cartItemsNumber = cartContext.items.reduce((currenValue, item) => {
        return currenValue + item.amount
    }, 0)

    const buttonClasses = `${styles.button} ${isbuttonAnimated ? styles.bump : ''}`

    useEffect(() => {
        if (cartContext.items.length === 0) {
            return
        }
        setIsbuttonAnimated(true)

        const timer = setTimeout(() => {
            setIsbuttonAnimated(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [cartContext.items])

    return <button className={buttonClasses} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon/>
        </span>
        <span>Корзина</span>
        <span className={styles.badge}>
            {cartItemsNumber}
        </span>
    </button>
}

export default HeaderCartButton
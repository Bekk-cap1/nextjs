import Link from 'next/link'
import styles from '../styles/header.module.scss'

const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <Link href='/'>
                    <img className={styles.img} src="/food.png" alt="" />
                </Link>
                <form action="#">
                    <input id='search' type="text" />
                    <label htmlFor="search"><button>search</button></label>
                </form>
                <ul className={styles.ul__list}>
                    <li><Link href='/korzina'>Корзина</Link></li>
                    <li><Link href='/likes'>Понравившие</Link></li>
                    <li><Link href='/zakaz'>Мои заказы</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Header
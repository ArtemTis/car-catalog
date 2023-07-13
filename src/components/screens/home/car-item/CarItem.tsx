import React from 'react'
import styles from '../Home.module.css'
import { Link } from 'react-router-dom'
import Price from './Price'

const CarItem = ({car}) => {
    return (
        <div className={styles.item} >
            <div
                className={styles.image}
                style={{
                    backgroundImage: `url(${car.image})`,
                }} />
            <div className={styles.info}>
                <h2>{car.name}</h2>
                <Price price={car.price}/>
                <Link to={`/car/${car.id}`} className='btn'>Read more</Link>
            </div>
        </div>
    )
}

export default CarItem
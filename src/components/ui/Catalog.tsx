import React from 'react'
import CarItem from '../screens/home/car-item/CarItem'
import { ICar } from '../../types/car.interface'

interface ICatalog {
    cars: ICar[]
}

const Catalog:React.FC<ICatalog> = ({cars}) => {
    return (
        <div>
            {cars.length ? (
                cars.map(car => (
                    <CarItem car={car} key={car.id} />
                ))
            ) : (
                <p>There are no cars</p>
            )}
        </div >
    )
}

export default Catalog
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CarItem from '../home/car-item/CarItem';
import { CarService } from '../../../services/car.service';
import { withAuth } from '../../../HOC/withAuth';
import { ICar } from '../../../types/car.interface';

const CarDetail = () => {

    const { id } = useParams();
    const [car, setCar] = useState<ICar>({} as ICar)

    useEffect(() => {
        const fetchData = async () => {
            const data = await CarService.getById(id as string)
            setCar({ name: data.title, price: data.albumId, image: data.url, id: data.id })
            console.log(data);
        }
        fetchData()
    }, [])

    return (
        <div>
            <Link to={'/'} className='btn'>Back</Link>
            <CarItem car={car} />
        </div>
    )
}

export default withAuth(CarDetail)
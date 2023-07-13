import React, { useEffect, useState } from 'react'
import styles from './Create-car-form.module.css'
import { CarService } from '../../../../services/car.service';
import { ICar, TypeData } from '../../../../types/car.interface';

const clearData = {
    price: '',
    name: '',
    image: ''
}

interface IProp{
    setCars: React.Dispatch<React.SetStateAction<{
        id: number;
        name: string;
        price: number;
        image: string;
    }[]>>
}

const CreateCarForm:React.FC<IProp> = ({ setCars }) => {

    const [data, setData] = useState<TypeData>(clearData);

    // const {register, reset, handleSubmit} = useForm({
    //     mode: 'onChange'
    // })

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await CarService.getAll()
    //         setCars(data)
    //     }
    //     fetchData()
    // },[])

    const createCar = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setCars(prev => [...prev, { id: prev.length + 1, price: +data.price, name: data.name, image: data.image }])
        setData(clearData)
    }

    return (
        <form className={styles.form}>
            <input placeholder='Name' onChange={(e) => setData(prev => ({ ...prev, name: e.target.value }))} value={data.name} />
            <input placeholder='Price' onChange={(e) => setData(prev => ({ ...prev, price: e.target.value }))} value={data.price} />
            <input placeholder='Image' onChange={(e) => setData(prev => ({ ...prev, image: e.target.value }))} value={data.image} />
            <button className='btn' onClick={e => createCar(e)}>Create</button>
        </form>
    )
}

export default CreateCarForm
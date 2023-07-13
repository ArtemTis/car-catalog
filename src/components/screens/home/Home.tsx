import React, { useCallback, useContext, useMemo, useState } from 'react'
import styles from './Home.module.css'
import { carsData } from './Cars.data.js'
import CarItem from './car-item/CarItem'
import CreateCarForm from './create-car-form/CreateCarForm'
import VideoPlayer from './Player'
import { AuthContext } from '../../../providers/AuthProvider'
import CarDetail from '../car-detail/CarDetail'
import { CarService } from '../../../services/car.service'
import Header from '../../ui/Header'
import Catalog from '../../ui/Catalog'

const Home:React.FC = () => {

  const [cars, setCars] = useState(carsData);

  const clearCars = useCallback(() => {
    () => {
      setCars([])
    }
  }, [])

  // const {data, isLoading, error} = useQuery(['cars'], () => CarService.getAll())

  return (
    <div>
      <h1>Cars catalog</h1>

      <Header />

      {/* <VideoPlayer /> */}
      <CreateCarForm setCars={setCars} />
      
      <Catalog cars={cars}/>
    </div >
  )
}

export default Home
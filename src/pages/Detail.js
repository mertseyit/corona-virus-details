import React, { useContext } from 'react'
import GetResultsBtn from '../components/GetResultsBtn'
import Table from '../components/Table'
import { DataContext } from '../contexts/DataContext'

const Detail = () => {
    const { data , isFetched} = useContext(DataContext)
    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <div className='mt-5'>
                    <h1 className='text-center text-lg lg:text-3xl'>Korona Virüsü Detay Tablosu</h1>
                    <h2 className='text-center text-md lg:text-lg text-gray-700'>Güncel kaynaklar ile Ülkelerin Koronavirüs verilerine erişebilirsiniz</h2>
                </div>
                <div>
                    <GetResultsBtn />
                </div>
                    {
                        isFetched ?  <Table /> : null
                    }
                </div>
        </>
    )
}

export default Detail
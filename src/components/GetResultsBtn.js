import React, { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'

const GetResultsBtn = () => {
    const {setIsFetched, isFetched} = useContext(DataContext)
    return (
        <>
            <div className='flex mt-3 text-center justify-center items-center '>
                {
                    isFetched ? null : <button onClick={() => setIsFetched(true)} className='px-3 py-2 bg-green-600 text-white rounded-md'>Get Result</button>
                }
            </div>
        </>
    )
}

export default GetResultsBtn
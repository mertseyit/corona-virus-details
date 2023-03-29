import axios from 'axios'
import {createContext, useEffect, useState} from 'react'
export const DataContext = createContext()

export const DataContextProvider = ({children}) => {
    const [data, setData] = useState([])
    const [isFetched, setIsFetched] = useState(false)
    

    const fetchData = () => {
        if(isFetched) {
            axios.get('https://coronavirus.m.pipedream.net/')
                .then(res => setData(res.data.rawData))
                .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        fetchData()

        return () => {
            setData([])
        }
    }, [isFetched])


    return(
        <DataContext.Provider value={{
            data,setIsFetched, isFetched
        }}>
            {children}
        </DataContext.Provider>
    )
}
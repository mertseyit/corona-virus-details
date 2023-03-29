import React, { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'

const Table = () => {
    const {data} = useContext(DataContext)

    return (
        <>
        <div className='overflow-x-auto'>
            {
                data.length === 0  ? <p className='text-center'>Loading...</p> : 
                <table className='table-auto w-full p-4 '>
                    <thead >
                        <tr>
                            <th className='p-1 lg:p-2 border bg-gray-400 text-md lg:text-lg'>Ülke</th>
                            <th className='p-1 lg:p-2 border bg-gray-400 text-md lg:text-lg'>Şehir</th>
                            <th className='p-1 lg:p-2 border bg-gray-400 text-md lg:text-lg'>Onaylanmış Vaka</th>
                            <th className='p-1 lg:p-2 border bg-gray-400 text-md lg:text-lg'>Vefat</th> 
                            <th className='p-1 lg:p-2 border bg-gray-400 text-md lg:text-lg'>Aktif Vaka</th> 
                            <th className='p-1 lg:p-2 border bg-gray-400 text-md lg:text-lg'>Bugün taburcu olan</th> {/* recorver */}
                            <th className='p-1 lg:p-2 border bg-gray-400 text-md lg:text-lg'>Ölüm Oranı</th>
                            <th className='p-1 lg:p-2 border bg-gray-400 text-md lg:text-lg'>Son Güncelleme</th>
                        </tr>
                    </thead>
                    <TableBody data={data}/>
                </table>
            }
            </div>
        </>
    )
}

const TableBody = ({data}) => {
    return (
        <tbody>
            {data.map((item, id) => (
                <tr key={id} className={id%2 === 0 ? 'bg-slate-300' : 'bg-slate-100'}>
                    <td className='p-1 text-sm  border font-bold'>{item.Country_Region}</td>
                    <td className='p-1 text-sm  border'>{item.Province_State === '' ? '-' : item.Province_State}</td>
                    <td className='p-1 text-sm  border'>{item.Confirmed}</td>
                    <td className='p-1 text-sm  border'>{item.Deaths}</td>
                    <td className='p-1 text-sm  border'>{item.Active === '' ? 'Aktif vaka yok' : item.Active}</td>
                    <td className='p-1 text-sm  border'>{item.Recovered === '' ? 'Güncel taburcu yok' : item.Recovered}</td>
                    <td className='p-1 text-sm  border'>{item.Case_Fatality_Ratio}</td>
                    <td className='p-1 text-sm  border'>{item.Last_Update}</td>
                </tr>
            ))}
        </tbody>
    )
}

export default Table
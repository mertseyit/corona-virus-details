import React from 'react'
import {DataContextProvider} from './contexts/DataContext'
import Detail from './pages/Detail'

const App = () => {
  return (
    <>
      <DataContextProvider>
        <Detail />  
      </DataContextProvider>
    </>
  )
}

export default App
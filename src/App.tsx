import  {useEffect} from 'react'
import {data} from './data.ts'
import {AppRoute} from "./components/appRoute";
import {Layout} from './components/layout'
import './App.css'

function App() {

    const myStorage = window.localStorage;

    useEffect( () => {
        myStorage.setItem("news", JSON.stringify(data))
    }, [])


  return (
    <>
        <Layout>
            <AppRoute/>
        </Layout>

    </>
  )
}

export default App

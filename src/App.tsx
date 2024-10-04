import  {useEffect} from 'react'
//import {api} from './api'
/*import {INews} from './interfaces'*/
/*import {MyCard} from './components/MyCard'*/
import {data} from '../data.ts'
/*import {Cards} from './components/cards'*/
/*import {MyHeader} from './components/header'*/
import {AppRoute} from "./components/appRoute";
import {Layout} from './components/layout'
/*import {BrowserRouter} from "react-router-dom";*/
import './App.css'

function App() {

    const myStorage = window.localStorage;
 /*const [news, setNews] = useState<INews[] | null>(data)*/

 /*   const dt = async () => {
      let data = await api();
      //setNews(data);
        myStorage.setItem('news', JSON.stringify(data));
        //setNews(data)
        console.log(">><<", typeof data)
      //return data
    }*/


    useEffect( () => {
        myStorage.setItem("news", JSON.stringify(data))
    }, [])

  /*  let myData = myStorage.getItem("news")
    const dt = myData&&JSON.parse(myData);*/



  return (
    <>
        <Layout>
            <AppRoute/>
        </Layout>

    </>
  )
}

export default App

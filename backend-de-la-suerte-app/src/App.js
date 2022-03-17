import './App.css';
import { createClient } from '@supabase/supabase-js'
import { useState,useEffect } from 'react'


const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)


const App = () => {
  const [loading, setLoading] = useState(true)
  const [emojis, setEmojis] = useState([])
  useEffect(() => {
    getEmojis()
  }, [])

  const getEmojis = async () => {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('emoji_db')
        .select(`*`)

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setEmojis(data)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }


    if(loading){
      return (<div className='wrapper'><h1 className='loading-title'>Cargando...</h1></div>)
    }
    return (<ul className='listado-emojis'>
      {
        emojis.map((emoji) =>(
            <li  className='emoji-item' key={emoji.id}><div className='emoji-icon'>{emoji.emoji}</div><div className='emoji-description'>{emoji.description}</div></li>
          ))
      }
    </ul>)
}




export default App
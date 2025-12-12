import './App.css'
import { Random } from './components/Random'
import { Tag } from './components/Tag'

function App() {
 

  return (
    <div>
      <h1 className='bg-white Rounded'>Random Gif</h1>
      <div className='flex flex-col'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App

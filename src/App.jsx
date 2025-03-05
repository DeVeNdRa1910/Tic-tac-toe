import './App.css'
import Game from './components/Game'
import TempGame from './components/TempGame'
function App() {
  return (
    <>
    <div className='flex justify-between h-[80vh] w-[80vw]'>
      <div>
        <Game/>
        {/* <TempGame/> */}
      </div>
    </div>
      
    </>
  )
}

export default App

import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main className='h-screen w-full'>
      <Toaster/>
      <Navbar/>
      <Outlet/>
    </main>
  )
}

export default App
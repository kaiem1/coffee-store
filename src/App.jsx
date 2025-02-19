
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
   <div className='flex gap-4'>
 
 <div>
 <Link to={'/addCoffee'}><button className="btn btn-warning ">Add Coffee</button></Link>
 </div>
 <div>
 <Link to={'/updateCoffee'}><button className="btn btn-warning">Update Coffee</button></Link>
 </div>
   </div>
  )
}

export default App

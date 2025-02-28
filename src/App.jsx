import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
      <div className="flex justify-between">
      <div className="flex gap-4">
        <div>
          <Link to={"/addCoffee"}>
            <button className="btn btn-warning ">Add Coffee</button>
          </Link>
        </div>
        <div>
          <Link to={"/updateCoffee"}>
            <button className="btn btn-warning">Update Coffee</button>
          </Link>
        </div>
        
      </div>

      <div className="flex gap-4">
        <div>
          <Link to={"/signup"}>
            <button className="btn btn-warning ">Sign Up</button>
          </Link>
        </div>
        <div>
          <Link to={"/signin"}>
            <button className="btn btn-warning">Sign In</button>
          </Link>
        </div>
        
      </div>
      </div>
      <div className='m-20'>
      <h1 className="text-6xl text-purple-400 pb-24 text-center border">
          {" "}
          Hot Hot Cold Coffee: {coffees.length}
        </h1>
      <div className="grid md:grid-cols-2 gap-4">
      {coffees.map((coffee) => (
        <CoffeeCard
         key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          ></CoffeeCard>
      ))}
      </div>
      </div>
    </div>
  );
}

export default App;

import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();

  return (
    <div>
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
      <div className='m-20'>
      <h1 className="text-6xl text-purple-400 pb-24 text-center border">
          {" "}
          Hot Hot Cold Coffee: {coffees.length}
        </h1>
      <div className="grid md:grid-cols-2 gap-4">
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
      ))}
      </div>
      </div>
    </div>
  );
}

export default App;

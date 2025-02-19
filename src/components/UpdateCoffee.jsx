import { Link } from "react-router-dom";


const UpdateCoffee = () => {
    return (
        <div>
            <div>
        <Link to={"/"}>
          <button className="btn btn-warning ">Back</button>
        </Link>
      </div>
      <div>
        <h3>This is Update Coffee Page</h3>
      </div>
        </div>
    );
};

export default UpdateCoffee;
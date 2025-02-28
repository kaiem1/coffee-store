import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div>
            <Link to={"/"}>
            <button className="btn btn-warning ">Back</button>
            </Link>
            <h2>Please Sign Up</h2>
        </div>
    );
};

export default SignUp;
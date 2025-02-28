import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div>
            <Link to={"/"}>
            <button className="btn btn-warning ">Back</button>
            </Link>
            <h2>Please Sign In</h2>
        </div>
    );
};

export default SignIn;
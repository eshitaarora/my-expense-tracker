import { Link } from "react-router-dom";

function Page404 () {
    return(
        <div align="center">
            <h3>Requested Page Not Found</h3>
            <img src="https://img.lovepik.com/element/40021/7866.png_1200.png" width="90%" height="280" alt="Page404" />
            <br />
            <Link to="/home" > Go to Home </Link>
        </div>
    ) 
};

export default Page404;
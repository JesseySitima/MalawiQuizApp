import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { makeStyles } from "@mui/styles";



const Header = () => {
    return (
        <div>
            <Link to={'/'}>
                <Button variant="outlined">Home</Button>
            </Link>
            <Link to={'quiz'}>
                <Button variant="outlined">Start a Quiz</Button>
            </Link>
        </div>
    );
}
export default Header;
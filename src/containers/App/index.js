import { BrowserRouter as Router,
    Route,
    Rou

} from "react-router-dom";
import Switch, { Routes } from "react-router";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";

import Header from "../../components/Header";
import Quiz from "../Quiz";
import Homepage from "../HomePage";

const App = () => {
    return (
       <Router>
        <Container maxWidth='sm'>
            <Box >
                <Header/>
                <Routes>
                    <Route exact path="/" Component={Homepage}></Route>
                    <Route path="/Quiz" Component={Quiz}></Route>
                </Routes>
            </Box>
        </Container>
       </Router>
    );
}
export default App;
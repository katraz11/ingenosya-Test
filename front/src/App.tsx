import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Pages/Users";

function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<Users />}></Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;

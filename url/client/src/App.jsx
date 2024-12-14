import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import { Signup } from "./components/sign";
import { Login } from "./components/loginuser";
import { ForgotPassword } from "./components/forget";
import { ResetPassword } from "./components/reset";
import ShortUrlRedirect from "./components/ShortUrlRedirect ";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/forgot' element={<ForgotPassword />} />
                <Route path='/reset' element={<ResetPassword />} />

                <Route path='/signup' element={<Signup />} />
                <Route path='/' element={<Homepage />} />
                <Route path='/:urlCode'
                    element={<ShortUrlRedirect />}
                />
            </Routes>

        </div>
    );
}

export default App;

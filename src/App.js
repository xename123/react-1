import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import "./styles/App.scss";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <AppRouter />
            </div>
        </BrowserRouter>
    );
}

export default App;

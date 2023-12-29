import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import SignIn from "../pages/SignIn/SignIn";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="*" element={<SignIn />}></Route>
        </Routes>
    );
};
export default AppRouter;

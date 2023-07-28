import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { CommentsPage } from "../pages/CommentsPage/CommentsPage";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/post/:id" element={<CommentsPage />} />
        </Routes>
    );
};

export default Router;
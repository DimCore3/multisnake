import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Playground = lazy(() => import("./Playground"));

export const Routing = () => {
    return (
        <Routes>
            <Route path='*' element={<Playground />} />
        </Routes>
    );
};
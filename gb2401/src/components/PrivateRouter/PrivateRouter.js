import { Navigate, Outlet } from "react-router";

export const PrivateRouter = ({ authed }) => {
    return authed ? <Outlet /> : <Navigate to='/' replace />;
};
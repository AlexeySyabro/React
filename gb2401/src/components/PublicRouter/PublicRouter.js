import { Navigate, Outlet } from "react-router";

export const PublicRouter = ({ authed }) => {
    return !authed ? <Outlet /> : <Navigate to='/profile' replace />;
};

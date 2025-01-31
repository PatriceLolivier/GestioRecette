import { Outlet } from "react-router-dom";
import { NavBar } from "@organisme/NavBar";

export const MainLayout: React.FC = () => {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </>
    )
}
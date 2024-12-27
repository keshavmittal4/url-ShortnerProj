import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <main className="min-h-screen container">
                {/* header */}
                <Header />
                {/* body */}
                <Outlet />
            </main>

            <div className="p-10 text-center bg-gray-800 mt-10">
                Made with ❤️ by Keshav Mittal
            </div>

            {/* footer */}
        </div>
    )
}

export default AppLayout;
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
    children: ReactElement;
}
interface RouteProp {
    name: string;
    url: string;
}

const routes: RouteProp[] = [
    {
        name: "Contact",
        url: "/",
    },
    {
        name: "Charts and Maps",
        url: "/map",
    },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const navigate = useNavigate();

    const routeLinks: ReactElement = (
        <>
            {routes.map((route: RouteProp, index: number) => (
                <div
                    className={`${
                        location.pathname == route.url
                            ? "border-2 border-[color:var(--primary)]"
                            : ""
                    } p-2 hover:bg-[color:var(--smoke)] rounded-md transition-all m-1 cursor-pointer`}
                    onClick={() => navigate(route.url)}
                    key={index}
                >
                    {route.name}
                </div>
            ))}
        </>
    );

    return (
        <>
            <div className="bg-[color:var(--primary)] text-center text-white text-2xl font-semibold p-2">
                {routes.reduce(
                    (acc: string, cur: RouteProp) =>
                        cur.url === location.pathname ? cur.name : acc,
                    routes[0].name
                )}
            </div>
            <div className="flex">
                <div className="bg-white relative top-0 left-0 h-[93vh] py-5 px-3">
                    {routeLinks}
                </div>
                <div className="w-full">{children}</div>
            </div>
        </>
    );
};

export default Layout;

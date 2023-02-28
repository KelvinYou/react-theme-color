import Home from "../pages/Home";
import Profile from "../pages/Profile";

interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: "",
    component: Home,
    name: "Home Screen",
    protected: true,
  },
  {
    path: "/profile",
    component: Profile,
    name: "Login Screen",
    protected: true,
  },
];

export default routes;
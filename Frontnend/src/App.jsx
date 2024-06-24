import { HashRouter, Route, Routes } from "react-router-dom";
import CategorySettingRouter from "./category/settings/CategorySettingRouter.jsx";
import DashboardSettingRouter from "./dashboards/settings/DashboardSettingRouter.jsx";
import PermissionSettingRouter from "./permissions/settings/PermissionSettingRouter.jsx";
import ProductSettingRouter from "./products/settings/ProductSettingRouter.jsx";
import RoleSettingRouter from "./roles/setttings/RoleSettingRouter.jsx";
import UserSettingRouter from "./users/settings/UserSettingRouter.jsx";
import useAuth from "./utils/hooks/useAuth.jsx";
import { UtilStateContextBase } from "./utils/states/contexts";

function App() {
  const auth = useAuth();

  return (
    <UtilStateContextBase.Provider value={{ auth }}>
      <HashRouter>
        <Routes>
          <Route path={"/*"} element={<DashboardSettingRouter />} />
          <Route
            path={"/permissions/*"}
            element={<PermissionSettingRouter />}
          />
          <Route path={"/roles/*"} element={<RoleSettingRouter />} />
          <Route path={"/users/*"} element={<UserSettingRouter />} />
          <Route path={"/products/*"} element={<ProductSettingRouter />} />
          <Route path={"/category/*"} element={<CategorySettingRouter />} />
        </Routes>
      </HashRouter>
    </UtilStateContextBase.Provider>
  );
}

export default App;

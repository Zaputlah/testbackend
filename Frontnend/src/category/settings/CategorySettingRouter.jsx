import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ManagerPage403 from "../../managers/pages/ManagerPage403";
import ManagerPage404 from "../../managers/pages/ManagerPage404";
import ManagerWidgetLayoutProtected from "../../managers/widgets/ManagerWidgetLayoutProtected";
import useAPI from "../../utils/hooks/useAPI";
import useAccess from "../../utils/hooks/useAccess";
import { UtilStateContextBase } from "../../utils/states/contexts";
import CategoryPageCreate from "../pages/CategoryPageCreate";
import CategoryPageDelete from "../pages/CategoryPageDelete";
import CategoryPageList from "../pages/CategoryPageList";
import CategoryPageUpdate from "../pages/CategoryPageUpdate";
import {
  CREATE_CATEGORIES,
  DELETE_CATEGORIES,
  READ_CATEGORIES,
  UPDATE_CATEGORIES,
} from "../states/constants";

const CategorySettingRouter = () => {
  const context = useContext(UtilStateContextBase);
  const api = useAPI();
  const access = useAccess(context, api);

  useEffect(() => {
    access.verify();
  }, [context.auth.isAuthenticated]);

  return (
    <Routes>
      <Route
        index
        element={
          access.has(
            [READ_CATEGORIES],
            context.auth.superuser,
            context.auth.accessList
          ) ? (
            <ManagerWidgetLayoutProtected>
              <CategoryPageList />
            </ManagerWidgetLayoutProtected>
          ) : (
            <ManagerWidgetLayoutProtected>
              <ManagerPage403 />
            </ManagerWidgetLayoutProtected>
          )
        }
      />

      <Route
        path="new"
        element={
          access.has(
            [CREATE_CATEGORIES],
            context.auth.superuser,
            context.auth.accessList
          ) ? (
            <ManagerWidgetLayoutProtected>
              <CategoryPageCreate />
            </ManagerWidgetLayoutProtected>
          ) : (
            <ManagerWidgetLayoutProtected>
              <ManagerPage403 />
            </ManagerWidgetLayoutProtected>
          )
        }
      />

      <Route
        path="update/:id"
        element={
          access.has(
            [UPDATE_CATEGORIES],
            context.auth.superuser,
            context.auth.accessList
          ) ? (
            <ManagerWidgetLayoutProtected>
              <CategoryPageUpdate />
            </ManagerWidgetLayoutProtected>
          ) : (
            <ManagerWidgetLayoutProtected>
              <ManagerPage403 />
            </ManagerWidgetLayoutProtected>
          )
        }
      />

      <Route
        path="delete/:id"
        element={
          access.has(
            [DELETE_CATEGORIES],
            context.auth.superuser,
            context.auth.accessList
          ) ? (
            <ManagerWidgetLayoutProtected>
              <CategoryPageDelete />
            </ManagerWidgetLayoutProtected>
          ) : (
            <ManagerWidgetLayoutProtected>
              <ManagerPage403 />
            </ManagerWidgetLayoutProtected>
          )
        }
      />

      <Route path="*" element={
        <ManagerWidgetLayoutProtected>
          <ManagerPage404 />
        </ManagerWidgetLayoutProtected>
      } />
    </Routes>
  );
};


export default CategorySettingRouter;

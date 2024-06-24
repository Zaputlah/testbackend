import { useContext } from "react";
import { NavDropdown } from "react-bootstrap";
import ManagerWidgetRBAC from "../../managers/widgets/ManagerWidgetRBAC";
import { UtilStateContextBase } from "../../utils/states/contexts";
import { CREATE_CATEGORIES, READ_CATEGORIES } from "../states/constants";

const CategorySettingMenu = () => {
  const context = useContext(UtilStateContextBase);

  return (
    <ManagerWidgetRBAC
      context={context}
      permissions={[READ_CATEGORIES, CREATE_CATEGORIES]}
      or={true}
    >
      <NavDropdown title="Category Manager">
        <ManagerWidgetRBAC context={context} permissions={[READ_CATEGORIES]}>
          <NavDropdown.Item href="#category">Categories</NavDropdown.Item>
        </ManagerWidgetRBAC>

        <ManagerWidgetRBAC context={context} permissions={[CREATE_CATEGORIES]}>
          <NavDropdown.Item href="#category/new">New Category</NavDropdown.Item>
        </ManagerWidgetRBAC>
      </NavDropdown>
    </ManagerWidgetRBAC>
  );
};

export default CategorySettingMenu;

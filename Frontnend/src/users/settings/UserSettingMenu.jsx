import {useContext} from "react";
import {UtilStateContextBase} from "../../utils/states/contexts.jsx";
import {NavDropdown} from "react-bootstrap";
import ManagerWidgetRBAC from "../../managers/widgets/ManagerWidgetRBAC.jsx";
import {CREATE_USERS, READ_USERS} from "../states/constants.jsx";

const UserSettingMenu = () => {
  const context = useContext(UtilStateContextBase);

  return (
    <ManagerWidgetRBAC context={context} permissions={[READ_USERS, CREATE_USERS]} or={true}>
      <NavDropdown title="User Manager" id="basic-nav-dropdown">
        <ManagerWidgetRBAC context={context} permissions={[READ_USERS]}>
          <NavDropdown.Item href="#users">
            Users
          </NavDropdown.Item>
          <ManagerWidgetRBAC context={context} permissions={[CREATE_USERS]}>
            <NavDropdown.Item href="#users/new">
              New User
            </NavDropdown.Item>
          </ManagerWidgetRBAC>
        </ManagerWidgetRBAC>
      </NavDropdown>
    </ManagerWidgetRBAC>
  )
}

export default UserSettingMenu;

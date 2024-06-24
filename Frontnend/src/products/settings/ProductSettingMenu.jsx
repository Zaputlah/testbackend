import { useContext } from "react";
import { NavDropdown } from "react-bootstrap";
import ManagerWidgetRBAC from "../../managers/widgets/ManagerWidgetRBAC";
import { UtilStateContextBase } from "../../utils/states/contexts";
import { CREATE_PRODUCTS, READ_PRODUCTS } from "../states/constants";

const ProductSettingMenu = () => {
  const context = useContext(UtilStateContextBase);

  return (
    <ManagerWidgetRBAC
      context={context}
      permissions={[READ_PRODUCTS, CREATE_PRODUCTS]}
      or={true}
    >
      <NavDropdown title="Product Manager">
        <ManagerWidgetRBAC context={context} permissions={[READ_PRODUCTS]}>
          <NavDropdown.Item href="#products">Products</NavDropdown.Item>
        </ManagerWidgetRBAC>

        <ManagerWidgetRBAC context={context} permissions={[CREATE_PRODUCTS]}>
          <NavDropdown.Item href="#products/new">New Product</NavDropdown.Item>
        </ManagerWidgetRBAC>
      </NavDropdown>
    </ManagerWidgetRBAC>
  );
};

export default ProductSettingMenu;

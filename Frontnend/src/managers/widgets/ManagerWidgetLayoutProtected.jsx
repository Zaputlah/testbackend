import PropTypes from "prop-types";
import ManagerNavigationBase from "../navigations/ManagerNavigationBase.jsx";
import {useContext} from "react";
import {UtilStateContextBase} from "../../utils/states/contexts.jsx";
import UserPageSignIn from "../../users/pages/UserPageSignIn.jsx";

const ManagerWidgetLayoutProtected = ({ children }) => {
  const context = useContext(UtilStateContextBase);

  return (
    <>
      { context.auth.isAuthenticated ? (
        <>
          <ManagerNavigationBase />
          <div className="mt-4"></div>
          {children}
        </>
      ) : (
        <UserPageSignIn />
      )}

    </>
  )
}

ManagerWidgetLayoutProtected.propTypes = {
  children: PropTypes.element,
}

export default ManagerWidgetLayoutProtected;
import React from "react";
import { RowMenu, RowMenuItem } from "./RowMenu";
// import { withRouter } from "react-router-dom";
// import { clearStored, getUser } from "../../services/DataService";
import Icon from "../Icon";
// import { disconnectSocket } from "../../services/Socket";
import { Navigate, useNavigate } from "react-router-dom";

const UserMenu = () => {
  
  const navigate = useNavigate();

  const logout = () => {

    //   disconnectSocket();

    navigate("../signin"); 

    //   clearStored();

  }

  //   openUserProfile = () => {
  //     this.props.history.push("/profile");
  //   };

  // var user = getUser() || {};
  
  
  
  return (
    <RowMenu
      menuButton={
        <a>
          <strong style={{ color: "black", fontSize: "15", cursor: "pointer" }}>
            Prathap
          </strong>
        </a>
      }
      whiteMenu={true}
      transition
    >
      <React.Fragment>
        <RowMenuItem>
          <div className="link d-flex align-items-center">
            <Icon name="person" style={{ fontSize: "20px" }} />
            <span className="ml-1" onClick={() => navigate("../profile")}>
              {" "}
              Profile{" "}
            </span>
          </div>
        </RowMenuItem>
        <RowMenuItem>
          <span
            className="link d-flex align-items-center"onClick={() => logout()}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Icon name="logout" style={{ fontSize: "18px" }} />
            <span className="ml-1" >
              Logout
            </span>
          </span>
        </RowMenuItem>
      </React.Fragment>
    </RowMenu>
  );
};

export default UserMenu;

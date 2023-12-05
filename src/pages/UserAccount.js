import React, { useState } from "react";
import ManageAccount from "./ManageAccount";
import { supabase } from "./supabase";
import { useAuth } from "./auth";
import "./UserAccount.css";
import MyOrders from './MyOrders.js'
import MFA from './MFA.js'

const UserAccount = () => {
  var user = useAuth().user;
  const [page, setPage] = useState(0);

  const pages = [
    <ManageAccount />,
    <MFA />,
    <MyOrders />];
    var displayPage = pages[page];

  const changePage = (e) => {
    setPage(e);
    displayPage = pages[page];
  }

  const signOut = () => {
    supabase.auth.signOut();
  }
  if (!user) {
    return <div>You must be logged in.</div>;
  }

  return (
    <div>
      <div className="menu-container">
        <div className="menu">
          <div className={"menu-button" + (page === 0 ? " selected" : '')} onClick={() => changePage(0)}>Manage account</div>
          <div className={"menu-button" + (page === 1 ? " selected" : '')} onClick={() => changePage(1)}>Manage MFA</div>
          <div className={"menu-button" + (page === 2 ? " selected" : '')} onClick={() => changePage(2)}>View orders</div>
          <div className="menu-button " onClick={signOut}>Log out</div>
        </div> 
      </div>
      {displayPage}
    </div>
  );
};

export default UserAccount;

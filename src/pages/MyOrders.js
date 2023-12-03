// ManageAccountPage.js

import React, { useEffect, useState } from "react";
import ManageAccount from "./ManageAccount";
import { supabase } from "./supabase";
import { useAuth } from "./auth";
import "./UserAccount.css";

const MyOrders = () => {
  var user = useAuth().user;


  return (
    <div>

    </div>
  );
};

export default MyOrders;

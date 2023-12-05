/**
 * UnenrollMFA shows a simple table with the list of factors together with a button to unenroll.
 * When a user types in the factorId of the factor that they wish to unenroll and clicks unenroll
 * the corresponding factor will be unenrolled.
 */

import { useState, useEffect } from "react";
import { supabase } from "./supabase";
import EnrollMFA from "./EnrollMFA";
import UnenrollMFA from "./UnenrollMFA";

export default function MFA() {
  const [factorId, setFactorId] = useState("");
  const [error, setError] = useState(""); // holds an error message
  const [page, setPage] = useState(); // holds an error message

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.auth.mfa.listFactors();
      if (error) {
        throw error;
      }

      console.log(data);
      if (data.totp.length > 0) {
        setPage(<UnenrollMFA />);
      } else {
        setPage(<EnrollMFA />);
      }
    })();
  }, []);

  return <div className="mfa-form">{page}</div>;
}

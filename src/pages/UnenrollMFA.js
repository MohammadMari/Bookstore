/**
 * UnenrollMFA shows a simple table with the list of factors together with a button to unenroll.
 * When a user types in the factorId of the factor that they wish to unenroll and clicks unenroll
 * the corresponding factor will be unenrolled.
 */

import { useState, useEffect } from "react";
import { supabase } from "./supabase";

export default function UnenrollMFA() {
  const [factorId, setFactorId] = useState("");
  const [error, setError] = useState(""); // holds an error message

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.auth.mfa.listFactors();
      if (error) {
        throw error;
      }
      setFactorId(data.totp[0].id);
    })();
  }, []);

  return (
    <div>
      {error && <div className="error">{error}</div>}
      <div>You are enrolled in MFA.</div>

      <button onClick={() => supabase.auth.mfa.unenroll({ factorId })}>
        Unenroll
      </button>
    </div>
  );
}

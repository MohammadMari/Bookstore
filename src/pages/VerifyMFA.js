import React, { useContext, useState, useEffect } from "react";
import { supabase } from "./supabase";
import { useAuth } from "./auth";
import { useNavigate } from "react-router";
import "./VerifyMFA.css";

const VerifyMFA = ({ children }) => {
  const user = useAuth().user;
  const [showMFAScreen, setShowMFAScreen] = useState(true);
  const [loading, setLoading] = useState(true);

  async function checkMFA() {
    setLoading(true);
    const { data, error } =
      await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
    if (error) {
      throw error;
    }

    if (data.nextLevel === "aal2" && data.nextLevel != data.currentLevel) {
      setShowMFAScreen(true);
    } else {
      setShowMFAScreen(false);
    }

    setLoading(false);
  }

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, data) => {
        checkMFA();
      }
    );
    (async () => {})();
  }, []);

  if (showMFAScreen || loading) {
    return <AuthMFA verifyAuth={() => setShowMFAScreen(false)} />;
  } else {
    return children;
  }
};

export default VerifyMFA;

function AuthMFA({ verifyAuth }) {
  const [verifyCode, setVerifyCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmitClicked = () => {
    console.log("wa");
    setError("");
    (async () => {
      const factors = await supabase.auth.mfa.listFactors();
      if (factors.error) {
        throw factors.error;
      }

      const totpFactor = factors.data.totp[0];

      if (!totpFactor) {
        throw new Error("No TOTP factors found!");
      }

      const factorId = totpFactor.id;

      const challenge = await supabase.auth.mfa.challenge({ factorId });
      if (challenge.error) {
        setError(challenge.error.message);
        throw challenge.error;
      }

      const challengeId = challenge.data.id;

      const verify = await supabase.auth.mfa.verify({
        factorId,
        challengeId,
        code: verifyCode,
      });
      if (verify.error) {
        setError(verify.error.message);
        throw verify.error;
      } else {
        verifyAuth();
      }
    })();
  };

  const signOut = () => {
    supabase.auth.signOut();
  }
  return (
    <div className="authenticator-container">
      <div className="authenticator">
        <div>Please enter the code from your authenticator app.</div>
        {error && <div className="error">{error}</div>}
        <input
          type="text"
          value={verifyCode}
          onChange={(e) => setVerifyCode(e.target.value.trim())}
        />
        <input className="button" type="button" value="Submit" onClick={onSubmitClicked} />
        <input className="button red" type="button" value="sign out" onClick={signOut} />
      </div>
    </div>
  );
}

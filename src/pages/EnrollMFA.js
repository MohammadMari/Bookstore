// https://supabase.com/docs/guides/auth/auth-mfa

/**
 * EnrollMFA shows a simple enrollment dialog. When shown on screen it calls
 * the `enroll` API. Each time a user clicks the Enable button it calls the
 * `challenge` and `verify` APIs to check if the code provided by the user is
 * valid.
 * When enrollment is successful, it calls `onEnrolled`. When the user clicks
 * Cancel the `onCancelled` callback is called.
 */
import { useState, useEffect } from "react";
import { supabase } from "./supabase";
import "./MFA.css";

export default function EnrollMFA() {
  const [factorId, setFactorId] = useState("");
  const [qr, setQR] = useState(""); // holds the QR code image SVG
  const [verifyCode, setVerifyCode] = useState(""); // contains the code entered by the user
  const [error, setError] = useState(""); // holds an error message
  const [inEnableProcess, setEnableProcess] = useState(false); // holds an error message
  const [enabled, setEnabled] = useState(false); // holds an error message


  const onEnrolled = () => {};

  const onCancelled = () => {};

  const onEnableClicked = () => {
    setError("");
    (async () => {
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
      }

      onEnrolled();
      setEnabled(true);
    })();
  };

  const beginEnable = async () => {
    const { data, error } = await supabase.auth.mfa.enroll({
      factorType: "totp",
    });
    if (error) {
      throw error;
    }

    setFactorId(data.id);

    // Supabase Auth returns an SVG QR code which you can convert into a data
    // URL that you can place in an <img> tag.
    setQR(data.totp.qr_code);
    setEnableProcess(true);
  } 


  if (!inEnableProcess) {
    return (
      <div>
        <input type="button" value={"Enable"} onClick={beginEnable} />
      </div>
    );
  } else if (enabled) {
    return ('Enabled!')
  }
   else {
    return (
      <div>
        {error && <div className="error">{error}</div>}
        <img width={200} src={qr} />
        <input
          type="text"
          placeholder="Please enter verification app code."
          value={verifyCode}
          onChange={(e) => setVerifyCode(e.target.value.trim())}
        />
        <div>
          <input type="button" value="Enable" onClick={onEnableClicked} />
          <input type="button" value="Cancel" onClick={onCancelled} />
        </div>
      </div>
    );
  }
}

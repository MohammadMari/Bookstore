import "./App.css";
import { BrowserRouter } from "react-router-dom";
import WrappedRoutes from "./WrappedRoutes";

import { AuthProvider } from "./pages/auth";
import VerifyMFA from "./pages/VerifyMFA";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <VerifyMFA>
          <WrappedRoutes></WrappedRoutes>
        </VerifyMFA>
        {/* routes are in here, we need everything in the auth provider to load first so we can use useAuth */}
        {/* Again I'm not sure if this is the proper way of doing things but it works */}
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

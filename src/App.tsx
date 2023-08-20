import "./App.css";
import {
  GoogleLogin,
  GoogleOAuthProvider,
  googleLogout,
} from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const clienId = process.env.REACT_APP_CLIENT_ID as string;

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={clienId}>
        <div>
          <h1>Google Calendar API</h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                if (credentialResponse.credential) {
                  var decoded = jwt_decode(credentialResponse.credential);
                }
                console.log(decoded);
                console.log("credentialResponse ----> ", credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
          <button onClick={() => googleLogout()} style={{ marginTop: "20px" }}>
            <h3>Logout</h3>
          </button>
        </div>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;

import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { updateAuth, expiry } = useContext(AuthContext);

  const imagineAPICall = () => updateAuth(Date.now() + 60000);

  const getTimeLeft = () => console.log(expiry - Date.now());

  console.log("time left:", expiry - Date.now());
  return (
    <>
      <button onClick={() => navigate("/products")}> Products page</button>
      <button onClick={() => navigate("/")}> Home page</button>
      <div>login</div>
      <button onClick={getTimeLeft}> Check time left </button>
      <button onClick={imagineAPICall}> Mock API call</button>
    </>
  );
};

export default Login;

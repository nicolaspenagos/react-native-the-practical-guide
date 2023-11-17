import AuthContent from "../components/Auth/AuthContent";
import { useState } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { Alert } from "react-native";
function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const loginHanlder = async ({ email, password }) => {
    setIsAuthenticating(true);
    try{
        await login(email, password);
    }catch (error){
        Alert.alert('Authentication failed!', 'Check your credentials');
    }
    setIsAuthenticating(false);
  };
  if (isAuthenticating) {
    return <LoadingOverlay message={"Loggin you in..."} />;
  }
  return <AuthContent isLogin onAuthenticate={loginHanlder} />;
}

export default LoginScreen;

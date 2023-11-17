import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../util/auth";
import { useState } from "react";
function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const signupHanlder = async ({ email, password }) => {
    setIsAuthenticating(true);
    try{
        await createUser(email, password);
    }catch(error){
        Alert.alert('Authentication failes', 'Try again later');
    }
    setIsAuthenticating(false);
  };
  if (isAuthenticating) {
    return <LoadingOverlay message={"Creating user..."} />;
  }

  return <AuthContent onAuthenticate={signupHanlder} />;
}

export default SignupScreen;

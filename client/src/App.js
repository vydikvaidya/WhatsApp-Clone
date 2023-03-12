

import { GoogleOAuthProvider } from '@react-oauth/google';

 //components
 import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';



 function App() {

  const clientId = '138712572125-jq8lvgs2briogv91ujeie9crp69rtu07.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;

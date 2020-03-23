import React, {useState, useEffect } from 'react';
import {Header, Radio, Icon, Button, Loader, Segment, Dimmer} from 'semantic-ui-react';
import Main from './Main';
import Footer from './components/Footer';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import * as firebaseui from 'firebaseui';
import 'firebase/auth';

export const DarkContext = React.createContext()

// const uiConfig = {
//   signInFlow: 'popup',
//   signInOptions: [
//       {
//           provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//           customParameters: {
//               prompt: 'select_account'
//           },
//       },
//       firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
//   ],
// };

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [visible, setVisible] = useState(false)
  // const [loggedIn, setLoggedIn] = useState(false)
  // const [userId, setUserId] = useState('')
  // const [userName, setUserName] = useState('')
  // const [loading, setLoading] = useState(false)


  // useEffect(() => {
  //   setLoading(true)
  //   const authCheck = firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //         setLoggedIn(true)
  //         if (user.isAnonymous) {
  //           setUserName("Guest")
  //         } else {
  //           setUserName(user.displayName)
  //           setUserId(user.uid)
  //         }
  //     }
  //     setLoading(false)
  //   });

  //   return (() => {
  //     authCheck()
  //     firebase.auth().signOut();
  //   })
  // }, [])

  // // const setAuthentication = (userInfo) => {
  // //   setUserId(userInfo.uid)
  // // }

  // const handleSignOut = () => {
  //   firebase.auth().signOut();
  //   setLoggedIn(false)
  //   setUserId('')
  //   setUserName('')
  // }

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  //       .then(function () {
  //         if (user) {
  //           if (user.isAnonymous) {
  //             setUserName("Guest")
  //           } else {
  //             setUserName(user.displayName)
  //             setUserId(user.uid)
  //           }
  //         }
  //         return true;
  //       })
  //   })
  // },[])

  return (
    <div className={`app ${darkMode ? "darkMode" : null}`}>
      {/* {
        loading
        ?
        <Segment>
        <Dimmer active page>
            <Loader content="Loading" inverted={darkMode} /> 
        </Dimmer>
        </Segment>
        :
          !loggedIn
          ?
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          :
          <> */}
            <header>
              <Button content="+" compact onClick={() => {setVisible(!visible)}} inverted={darkMode} />
        <Header as="h1" inverted>Board Game Toolkit</Header>
              <div className="darkToggle" >
                <Icon name="sun" size="large" color="orange" inverted={darkMode} />
                <Radio className="darkToggleSwitch" toggle size="small" onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
                <Icon name="moon" size="large" color="yellow" inverted={darkMode} />
              </div>
            </header>
            
            <DarkContext.Provider value={darkMode}>
              <Main 
                visible={visible} 
                setVisible={setVisible} 
                // handleSignOut={handleSignOut} 
              />
            </DarkContext.Provider>
            <Footer />
          {/* </>
      } */}
    </div>
  );
}

export default App;

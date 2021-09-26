import React, {useReducer, useEffect, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthContext from './src/contexts/AuthContext';
import RootStackNavigator from './src/navigations/RootStackNavigator';
import SplashScreen from './src/screens/SplashScreen';

const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {...prevState, userToken: action.token, isLoading: false};
    case 'SIGN_IN':
      return {...prevState, userToken: action.token, isSignout: false};
    case 'SIGN_OUT':
      return {...prevState, userToken: null, isSignout: true};
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      try {
        await timeout(2000);
        userToken = 'dummy-auth-token';
      } catch (e) {}

      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      state,
      signIn: () => dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'}),
      signOut: () => dispatch({type: 'SIGN_OUT'}),
    }),
    [state],
  );

  if (state.isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
  );
};

export default App;

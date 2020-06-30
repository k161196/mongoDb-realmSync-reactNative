import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {Button} from 'react-native-elements';
import {useAuth} from './App/Connection/AuthProvider';
import {LogInView} from './App/Connection/LogInView';
import {AuthProvider} from './App/Connection/AuthProvider';
import {TasksProvider} from './App/Connection/TasksProvider';
import {TasksView} from './App/Connection/TasksView';
const App = () => {
  return (
    <AuthProvider>
      <AppBody />
    </AuthProvider>
  );
};

// The AppBody is the main view within the App. If a user is not logged in, it
// renders the login view. Otherwise, it renders the tasks view. It must be
// within an AuthProvider.
function AppBody() {
  const {user, logOut} = useAuth();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          {user == null ? (
            <LogInView />
          ) : (
            // <Button onPress={logOut} title="Log Out" />
            <TasksProvider projectId="My Project">
              <TasksView />
            </TasksProvider>
          )}
        </View>
      </SafeAreaView>
    </>
  );
}

export default App;

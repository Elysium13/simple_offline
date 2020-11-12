/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NetworkProvider, NetworkConsumer } from 'react-native-offline';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <NetworkProvider>
        <View style={styles.view}>
          <NetworkConsumer>
            {( { isConnected } ) => (

              isConnected ? (
                <Text style={styles.online}>Online</Text>
              ) : (
                  <Text style={styles.offline}>Offline</Text>
                )
            )}
          </NetworkConsumer>
        </View>
      </NetworkProvider>
    </>
  );
};

const styles = StyleSheet.create( {
  view: {
    justifyContent: 'center',
    flex: 1,
  },
  online: {
    fontSize: 30,
    textAlign: 'center',
    color: 'green'
  },
  offline: {
    fontSize: 30,
    textAlign: 'center',
    color: 'red'
  }
} );

export default App;

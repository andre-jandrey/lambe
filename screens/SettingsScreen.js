import React from 'react';
import { View, Button, Text } from 'react-native';

const Settings = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Página de configuração</Text>
  </View>
);

Settings.navigationOptions = {
  title: 'Home',
}

export default Settings;
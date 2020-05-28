import React from 'react';
import { View, Button, Text } from 'react-native';

const PostDetails = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Detalhe da noticia</Text>
  </View>
);

PostDetails.navigationOptions = {
  title: 'PostDetails2',
}


export default PostDetails;
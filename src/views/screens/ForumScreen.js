import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../consts/colors';
import posts from '../../consts/post';
import PostCard from '../../components/Post/PostCard';
import {DrawerActions} from '@react-navigation/native';

const ForumScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#41DA', '#22a7f0']}
        style={styles.header}>
        <MaterialIcons
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          name="sort"
          size={28}
          color={COLORS.white}></MaterialIcons>
        <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 20}}>
          Diễn đàn
        </Text>
        <MaterialCommunityIcons
          name="plus"
          size={28}
          color={COLORS.white}></MaterialCommunityIcons>
      </LinearGradient>

      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size={25} color={COLORS.blueLight} />
        </View>
      ) : (
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            maxToRenderPerBatch={2}
            data={posts}
            keyExtractor={() => Math.random().toString(36).substr(2, 9)}
            renderItem={({item}) => (
              <PostCard post={item} navigation={navigation} />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default ForumScreen;

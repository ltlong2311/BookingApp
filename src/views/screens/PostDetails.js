import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/colors';
import hotelsByLocation from '../../consts/hotelsByLocation';
import HotelByLocationCard from '../../components/Hotel/HotelByLocationCard';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-gesture-handler';
import PostHeader from '../../components/Post/PostHeader';
import CommentCard from '../../components/Post/CommentCard';

const PostDetails = ({route, navigation}) => {
  const post = route.params;
  const [showInputComment, setShowInputComment] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const changeStatusInput = () => {
    setShowInputComment(!showInputComment);
  };
  const changeStatusFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const reverseDateString = date => {
    const arrChar = date.split(' ');
    const dArr = arrChar[0].split('-');
    arrChar[0] = dArr[2] + '-' + dArr[1] + '-' + dArr[0];
    return arrChar[1] + ' ' + arrChar[0];
  };

  const renderHeader = () => {
    return (
      // <PostHeader
      //   post={post}
      //   showInputComment={showInputComment}
      //   isFavorite={isFavorite}
      //   changeStatusInput={() => changeStatusInput()}
      //   changeStatusFavorite={() => changeStatusFavorite()}
      // />
      <View style={{flex: 1, paddingHorizontal: 20, paddingTop: 10}}>
        <View style={styles.postBlock}>
          <Text style={{color: '#2c3e50', fontSize: 20, fontWeight: 'bold'}}>
            {post.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Text
              style={{
                color: COLORS.darkSub,
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              {post.user} ∙
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 5,
              }}>
              <Text style={{color: COLORS.darkSub, paddingRight: 2}}>
                {post.favorite}
              </Text>
              <MaterialCommunityIcons
                style={{color: COLORS.redTorn}}
                name="heart"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text style={{color: COLORS.darkSub}}>
                {post.comments.length}
              </Text>
              <MaterialCommunityIcons
                style={{color: COLORS.blueChambray}}
                name="reply"
                size={18}
              />
            </View>
          </View>
          <Text style={{color: COLORS.darkSub, fontSize: 12, marginTop: 5}}>
            {reverseDateString(post.createDate)}
          </Text>
          <View style={{}}>
            {post.content.split('\n').map((text, index) => (
              <Text
                key={index}
                style={{
                  color: COLORS.darkText,
                  fontSize: 15,
                  marginTop: 10,
                  // textAlign: "justify",
                  lineHeight: 23,
                }}>
                {text}
              </Text>
            ))}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingVertical: 5,
            }}>
            <TouchableOpacity
              actionOpacity={0.8}
              onPress={changeStatusFavorite}>
              {isFavorite ? (
                <MaterialCommunityIcons
                  style={{color: COLORS.redTorn}}
                  name="heart"
                  size={18}
                />
              ) : (
                <MaterialCommunityIcons
                  style={{color: COLORS.darkSub}}
                  name="heart-outline"
                  size={18}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity actionOpacity={0.8} onPress={changeStatusInput}>
              {showInputComment ? (
                <MaterialCommunityIcons
                  style={{color: COLORS.blueChambray, paddingLeft: 12}}
                  name="reply"
                  size={25}
                />
              ) : (
                <MaterialCommunityIcons
                  style={{color: COLORS.darkSub, paddingLeft: 12}}
                  name="reply-outline"
                  size={25}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return <Text></Text>;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar style="light" />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#41DA', '#22a7f0']}
        style={styles.header}>
        <MaterialIcons
          onPress={navigation.goBack}
          name="arrow-back"
          size={21}
          style={{top: 5}}
          color={COLORS.white}></MaterialIcons>
        <Text
          style={{color: COLORS.white, fontSize: 19, marginLeft: 10, top: 5}}>
          {post.type === '1'
            ? 'Thông báo'
            : post.type === '2'
            ? 'Hướng dẫn'
            : post.type === '3'
            ? 'Review'
            : post.type === '4'
            ? 'Hỏi đáp'
            : post.type === '5'
            ? 'Bàn luận - chém gió'
            : ''}
        </Text>
      </LinearGradient>

      <FlatList
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        maxToRenderPerBatch={2}
        data={post.comments}
        keyExtractor={() => Math.random().toString(36).substr(2, 9)}
        renderItem={({item}) => (
          <CommentCard comment={item} navigation={navigation} />
        )}
      />

      {showInputComment && (
        <View style={styles.comment}>
          <TextInput
            placeholder="Nhập bình luận..."
            underlineColorAndroid="transparent"
            style={styles.textInput}
            autoCapitalize="none"
          />
          <MaterialCommunityIcons
            name="send"
            style={{color: COLORS.blueChambray}}
            size={20}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingTop: 45,
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backgroundColor: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTittle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: COLORS.whiteT,
  },
  overlay: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
  postBlock: {
    borderBottomWidth: 1,
    borderBottomColor: '#efeff4',
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    paddingRight: 20,
    borderTopWidth: 1,
    borderTopColor: '#efeff4',
    backgroundColor: COLORS.white,
  },
  btnComment: {
    height: 40,
    width: 120,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputComment: {
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    elevation: 12,
  },
  textInput: {
    flex: 1,
    padding: 5,
    marginHorizontal: 10,
    color: '#05375a',
    fontSize: 15,
    // backgroundColor: "#f2f3f4",
    // borderRadius: 15,
  },
});

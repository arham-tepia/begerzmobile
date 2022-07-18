import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {MyTextInput} from '../../../components/myTextinput';
import {MyTextMulish} from '../../../components/textMulish';
import {commonStyles} from '../../../styles/styles';
import {GradientButton} from './components/gradientButton';
import {MyProfileAvatar} from './components/profileAvatar';
import {ICONS} from '../../../constants/icons';
import {FONTS} from '../../../constants/fonts';
import {MyButton} from '../../../components/myButton';
import {Margin} from '../../../components/margin';
import {RootStateOrAny, useSelector} from 'react-redux';
import {getUserInformationById} from '../../../api/user';
import {updateAccountInformationByID} from '../../../api/accounts';
import ImagePicker from 'react-native-image-crop-picker';
import {AddVideoOptions} from '../../beg/post/components/addVideoOptions';
import {getSignedURLForImage} from '../../../api/signedUrl';
import {putFile} from '../../../api/uploadFIle';
import {MEDIA_URL} from '../../../api/url';

export const MyProfile = () => {
  const user = useSelector((state: RootStateOrAny) => state.currentUser);
  const [data, setData]: any = useState([]);
  const [username, setUsername] = useState('');
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [signedUrl, setSignedUrl]: any = useState([]);
  const [fileObj, setFileObj]: any = useState(false);
  const [showOpenOptions, setShowOpenOptions]: any = useState(false);
  const [loader, setLoader]: any = useState(false);

  async function GetData() {
    setLoader(true);
    const res = await getUserInformationById(user.id).finally(() =>
      setLoader(false)
    );
    setData(res);
    if (res._id) {
      setUsername(res.username);
      setEmail(res.email);
      setFname(res.firstName);
      setLname(res.lastName);
    }
    console.log(res, 'user');
  }
  useEffect(() => {
    GetData();
  }, []);

  async function onSaveChanges() {
    setLoader(true);
    const uploadRes = await processImage(fileObj);

    const obj = {
      username: username,
      email: email,
      firstName: fName,
      lastName: lName,
      profileImage: uploadRes ? MEDIA_URL + uploadRes.uuid : data.profileImage
    };
    console.log(obj, 'Updated values');

    const res = await updateAccountInformationByID(user.id, obj).finally(() =>
      setLoader(false)
    );
    console.log(res, 'update response');
    GetData();
  }

  async function onImagePick() {
    ImagePicker.openPicker({
      mediaType: 'photo',
      compressImageQuality: 0.5
    }).then(img => {
      setShowOpenOptions(false);
      setFileObj(img);
    });
  }

  async function onOpenCamera() {
    ImagePicker.openCamera({
      mediaType: 'photo',
      compressImageQuality: 0.7
    }).then(img => {
      setShowOpenOptions(false);
      setFileObj(img);
    });
  }

  async function processImage(fileObj: any) {
    const imageLink = user.id + '.png';
    if (fileObj.path) {
      const res = await getSignedURLForImage(imageLink);
      console.log(res, 'Response');

      setSignedUrl(res);
      await putFile(res, fileObj).finally(() => {});
      return res;
    }
    return false;
  }

  return (
    <>
      <View style={commonStyles.main}>
        <ScrollView style={{marginTop: 20, width: '100%'}}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <MyProfileAvatar
              source={{
                uri: fileObj.path ?? data.profileImage
              }}
              onPress={() => setShowOpenOptions(true)}
            />
            <MyTextMulish style={[styles.name, {marginTop: 12}]}>
              {data.firstName} {data.lastName}
            </MyTextMulish>
            <View style={{width: '90%', marginTop: 30}}>
              <MyTextMulish style={[styles.heading]}>
                Personal Information{' '}
                {loader && (
                  <ActivityIndicator
                    size={'small'}
                    style={{marginLeft: 10, alignSelf: 'center'}}
                  />
                )}
              </MyTextMulish>
              <View style={{marginTop: 27}} />
              <MyTextInput
                label="First Name"
                placeholder="John"
                defaultValue={data.firstName}
                value={fName}
              />
              <View style={{marginTop: 35}} />
              <MyTextInput
                label="Last Name"
                placeholder="Doe"
                defaultValue={data.lastName}
                value={lName}
              />
              <View style={{marginTop: 35}} />
              <MyTextInput
                label="Email"
                placeholder="abc@xyz.com"
                defaultValue={data.email}
                onChangeText={setEmail}
                value={email}
              />
              <View style={{marginTop: 35}} />
              <MyTextInput
                label="Username"
                placeholder="abc@xyz.com"
                defaultValue={data.username}
                onChangeText={setUsername}
                value={username}
              />
              {/* <MyTextMulish style={[styles.heading, {marginTop: 42}]}>
              Connect Social
            </MyTextMulish>
            <View style={{marginTop: 24}} />
            <GradientButton
              icon={ICONS.facebookFull}
              title="Connect your facebook"
            />
            <View style={{marginTop: 24}} />
            <GradientButton
              icon={ICONS.instagramFull}
              title="Connect your instagram"
            />
            <View style={{marginTop: 24}} />
            <GradientButton
              icon={ICONS.twitterFull}
              title="Connect your twitter"
            /> */}
              <MyTextMulish style={[styles.heading, {marginTop: 49}]}>
                Delete your account
              </MyTextMulish>
              <View style={{marginTop: 25}} />
              <GradientButton
                icon={ICONS.binFull}
                title="Delete your account"
              />
              <View style={{marginTop: 59}} />
              <MyButton
                title="Save Changes"
                onPress={onSaveChanges}
                loading={loader}
                disabled={loader}
                textStyles={{
                  fontFamily: FONTS.P_REGULAR,
                  fontWeight: '600',
                  fontSize: 16
                }}
                style={{height: 48, borderRadius: 24}}
              />
              <Margin top margin={25} />
            </View>
          </View>
        </ScrollView>
      </View>
      <AddVideoOptions
        onOpenCamera={onOpenCamera}
        onOpenGallery={onImagePick}
        visible={showOpenOptions}
        onClosePress={() => setShowOpenOptions(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    color: '#000000'
  },
  heading: {
    fontWeight: '700',
    fontSize: 16,
    color: '#000000'
  }
});

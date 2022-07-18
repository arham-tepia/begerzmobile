import React, {useState} from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {postBeg, updateBeg} from '../../../api/beg';
import {Checkbox} from '../../../components/checkbox';
import {MyButton} from '../../../components/myButton';
import {MyTextInput} from '../../../components/myTextinput';
import {Radio} from '../../../components/radio';
import {MyTextMontserrat} from '../../../components/textMontserrat';
import {MyTextPoppins} from '../../../components/textPoppins';
import {FONTS} from '../../../constants/fonts';
import {commonStyles} from '../../../styles/styles';
import {BegHeadings} from './components/begHeadings';
import {GreyCard} from './components/greyCard';
import Toast from 'react-native-toast-message';
import {RootStateOrAny, useSelector} from 'react-redux';

export const TellYourStory = ({navigation, route}: any) => {
  // const [saveMode, setSavemode]: any = useState(false);
  const [saveType, setSaveType]: any = useState('');
  const [story, setStory]: any = useState('');
  const [loader, setLoader]: any = useState(false);
  const [instant, setInstant]: any = useState(false);
  const user = useSelector((state: RootStateOrAny) => state.currentUser);

  var subtext = 'Explain who you are and why you are creating this beg.';

  const allStoryTypes = [
    {
      name: 'Private',
      desc: 'Only you and people you choose can watch your video'
    },
    {
      name: 'Unlisted',
      desc: 'Anyone with the video link can watch your video'
    },
    {
      name: 'Public',
      desc: 'Everyone can watch your video'
    }
  ];

  function StoryType(props: any) {
    const {item} = props;
    const name = item.name;
    const desc = item.desc;
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          marginVertical: 5
        }}>
        <View
          style={{
            width: '10%',
            alignItems: 'center',
            justifyContent: 'center'
            //height: '100%',
          }}>
          <Radio
            onPress={() => setSaveType(name)}
            active={saveType === name ? true : false}
          />
        </View>
        <View style={{width: '88%'}}>
          <MyTextPoppins style={styles.cardHeading}>{name}</MyTextPoppins>
          <MyTextPoppins style={[styles.cardHeading, {color: 'white'}]}>
            {desc}
          </MyTextPoppins>
        </View>
      </View>
    );
  }

  async function onCompleteBeg() {
    const r = route.params;
    const data = {
      publishType: saveType.toLowerCase(),
      userId: user.id,
      title: r.title,
      textDescription: story,
      htmlDescription: story,
      thumbLink: r.media.thumbnail,
      videoLink: r.media.video,
      goalAmount: parseInt(r.begAmount),
      //goalDate: '2022-',
      goalDate: r.begDate,
      status: 'active'
    };

    const res = await postBeg(data)
      .finally(() => setLoader(false))
      .catch((err: any) => {
        console.log(err, 'errosss');
      });
    console.log(res, 'Post beg response');

    if (res._id !== undefined) {
      navigation.replace('begIsReady', {beg: res});
    } else {
      if (res.errors) {
        Toast.show({
          type: 'error',
          text1: res.errors[0].param,
          text2: res.errors[0].msg
        });
      }
    }
  }

  // async function uploadVideos(beg: any) {
  //   const videoObject = route.params.videos;
  //   videoObject.forEach((video: any) => {
  //     video.begId = beg._id;
  //   });
  //   console.log(videoObject, 'Video object to update to each beg');
  //   const res = await updateBeg(videoObject, beg._id);
  //   console.log(res, 'update response');
  // }

  function disabled() {
    return story.length < 8 || saveType.length < 2;
  }

  return (
    <>
      <View style={commonStyles.main}>
        <ScrollView style={{width: '100%'}}>
          <View style={{width: '90%', marginTop: 20, alignSelf: 'center'}}>
            <BegHeadings style={{color: '#000000', marginBottom: 4}}>
              Tell your story
            </BegHeadings>
            <MyTextPoppins style={styles.subheading}>{subtext}</MyTextPoppins>
            <MyTextInput
              containerStyle={styles.tiContainer}
              style={styles.ti}
              multiline
              blurOnSubmit
              onChangeText={setStory}
              value={story}
            />
            <GreyCard>
              <View style={{width: '90%', marginTop: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                  <View
                    style={{
                      width: '10%',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      height: '100%'
                    }}>
                    <Radio active />
                  </View>
                  <View style={{width: '88%'}}>
                    <MyTextMontserrat style={styles.cardHeading}>
                      Save or publish
                    </MyTextMontserrat>
                    <MyTextMontserrat
                      style={[styles.cardHeading, {color: '#E5E5E5'}]}>
                      Make your video public, unlisted, or private
                    </MyTextMontserrat>
                  </View>
                </View>
                <View
                  style={{
                    width: '88%',
                    alignSelf: 'flex-end',
                    marginTop: 10
                  }}>
                  {allStoryTypes.map((item: any) => {
                    return <StoryType item={item} />;
                  })}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginVertical: 10
                    }}>
                    <View
                      style={{
                        width: '10%',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                      <Checkbox
                        active={instant}
                        onPress={() => setInstant(!instant)}
                      />
                    </View>
                    <View style={{width: '88%'}}>
                      <MyTextPoppins style={styles.cardHeading}>
                        Set as instant premiere?
                      </MyTextPoppins>
                    </View>
                  </View>
                </View>
              </View>
            </GreyCard>
            <View style={{marginBottom: 28}}></View>
            <MyButton
              title="Complete your beg"
              textStyles={{fontFamily: FONTS.P_REGULAR, letterSpacing: 0}}
              onPress={onCompleteBeg}
              //onPress={() => console.log(route.params, 'Route')}
              disabled={disabled() || loader}
              loading={loader}
            />
            <View style={{marginBottom: 10}} />
            <MyButton
              title="Preview"
              textStyles={{fontFamily: FONTS.P_BOLD, letterSpacing: 0}}
              inverse
            />
            <View style={{marginBottom: 20}} />
            <MyTextMontserrat style={styles.noteText}>
              A 4% processing fee is collected by Begerz.com foe using their
              platform.
            </MyTextMontserrat>
            <View style={{marginBottom: 20}} />
            <MyTextMontserrat style={styles.noteText}>
              5% of the 4% transaction fee (what was collected) will be donated
              to 1 of 4 charities (pre-determined by Begerz.com).
            </MyTextMontserrat>
            <View style={{marginBottom: 30}} />
          </View>
        </ScrollView>
      </View>
      <Toast position="bottom" />
    </>
  );
};

const styles = StyleSheet.create({
  subheading: {
    color: '#28383ECC',
    fontSize: 12,
    lineHeight: 18,
    width: '90%'
  },
  tiContainer: {
    height: 180,
    borderRadius: 4,
    borderWidth: 1.25,
    borderColor: '#28383ECC'
  },
  ti: {
    fontFamily: FONTS.M_REGULAR,
    fontSize: 10,
    height: 170
  },
  cardHeading: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
    lineHeight: 22
  },
  noteText: {
    color: 'rgba(40, 56, 62, 0.8)',
    fontSize: 12,
    lineHeight: 18
  }
});

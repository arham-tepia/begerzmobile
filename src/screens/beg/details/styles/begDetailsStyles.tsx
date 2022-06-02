import {StyleSheet} from 'react-native';
import {FONTS} from '../../../../constants/fonts';

export const begDetailsStyles = StyleSheet.create({
  titleText: {
    fontWeight: '700',
    fontSize: 30,
    color: '#000000'
  },
  createdBytext: {
    color: '#979797',
    fontSize: 14
  },
  goalTotalText: {
    fontSize: 17,
    color: '#979797',
    fontWeight: '400'
  },
  goalRaisedText: {
    fontWeight: '700',
    fontSize: 20,
    color: '#000000'
  },
  daysLeftText: {
    fontWeight: '500',
    fontSize: 18
  },
  daysText: {
    fontWeight: '700',
    fontSize: 18,
    color: '#979797'
  },
  statValue: {
    fontWeight: '700',
    fontSize: 18,
    color: '#000000'
  },
  statName: {
    fontWeight: '700',
    fontSize: 17,
    color: '#979797'
  },
  topRow: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 12
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginTop: 10
  },
  videoView: {
    width: '100%',
    height: 296,
    backgroundColor: 'black'
  },
  emojiStyle: {
    height: 34,
    width: 34,
    borderRadius: 34
  },
  emojiText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111111',
    marginTop: 9
  },
  emojiView: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 102
  },
  emojiCount: {
    fontWeight: '700',
    fontSize: 12
  },
  emojiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 10,
    borderColor: '#DEDEDE'
  },
  statCard: {
    minHeight: 361,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '90%',
    marginTop: 18,
    borderRadius: 10,
    marginBottom: 21
  },
  statCardTopRow: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 26
  },
  contributionView: {
    marginTop: 23,
    paddingTop: 13,
    paddingBottom: 13,
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#DEDEDE',
    width: '90%'
  },
  buttonCont: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20
  },
  button: {width: '48%', height: 54, borderRadius: 100},
  buttonText: {
    fontFamily: FONTS.M_REGULAR,
    fontSize: 18,
    letterSpacing: 0,
    fontWeight: '700'
  },
  statContainer: {
    height: 69,
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#dedede',
    flexDirection: 'row',
    marginTop: 18,
    width: '90%'
  },
  statBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  cardBottomRow: {
    width: '90%',
    alignItems: 'center',
    marginTop: 21,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 24
  },
  cardBottomItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%'
  },
  cardBottomItemText: {
    fontSize: 16,
    color: '#000000'
  },
  dateCont: {
    height: 46,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#dedede',
    alignItems: 'flex-start',
    width: '90%',
    justifyContent: 'center'
  },
  dateText: {
    fontWeight: '700',
    fontSize: 14,
    color: '#000000'
  },
  detailsCont: {
    width: '90%',
    marginTop: 21,
    paddingBottom: 14,
    borderBottomWidth: 0.5,
    borderColor: '#dedede'
  },
  details: {
    fontSize: 18,
    color: '#000000'
  }
});

import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const getSize = (size: number, screenHeight?: number) =>
  RFValue(size, screenHeight);

const getWidth = (width: number) => wp(width);
const getHeight = (height: number) => hp(height);

export {getSize, getWidth, getHeight};

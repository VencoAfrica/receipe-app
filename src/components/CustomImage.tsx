import React from 'react';
import {View, Image, StyleSheet, ActivityIndicator} from 'react-native';
import {COLORS} from '../theme/colors';
import ICONS from '../constants/icons';
import CachedImage from 'expo-cached-image';

interface Props {
  image?: any;
  size?: number;
  style?: object;
  imageUploading?: boolean;
}

const CustomImage: React.FC<Props> = ({
  size,
  image,
  style,
  imageUploading = false,
}) => {
  const [imgDownloading, setImgDownloading] = React.useState(true);
  return (

      typeof image === "string" ?
          <Image source={{uri: image}} style={style} resizeMode={'contain'}/>
          :
          <Image source={image} style={style} resizeMode={'contain'} />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: COLORS.white,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.white,
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomImage;

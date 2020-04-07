HEADER_MAX_HEIGHT = 120;
HEADER_MIN_HEIGHT = 70;
HEADER_MAX_IMAGE_HEIGHT = 80;
HEADER_MIN_IMAGE_HEIGHT = 40;

const setAnimationToScreen = pScrollY => {
  let changingHeight = pScrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });
  let profileImageHeight = pScrollY.interpolate({
    inputRange: [0, HEADER_MAX_IMAGE_HEIGHT - HEADER_MIN_IMAGE_HEIGHT],
    outputRange: [HEADER_MAX_IMAGE_HEIGHT, HEADER_MIN_IMAGE_HEIGHT],
    extrapolate: 'clamp',
  });

  return {changingHeight, profileImageHeight};
};
export {setAnimationToScreen};

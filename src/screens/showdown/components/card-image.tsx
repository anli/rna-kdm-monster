import React from 'react';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

const CardImage = ({
  testID,
  imageUrl,
}: {
  testID?: string;
  imageUrl?: string;
}) => (
  <>
    {imageUrl && (
      <Image
        testID={testID}
        source={{
          uri: imageUrl,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    )}
  </>
);

export default CardImage;

const Image = styled(FastImage)`
  height: 500px;
  flex: 1;
`;

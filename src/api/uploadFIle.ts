import RNFetchBlob from 'rn-fetch-blob';

export const putFile = async (link: any, fileObj: any) => {
  const preSignedURL = link.url;
  const pathToImage = fileObj.path.replace('file://', ''); // without file:// scheme at the beginning
  const headers = {
    //'Content-Type': undefined
  };

  return RNFetchBlob.fetch(
    'PUT',
    preSignedURL,
    headers,
    RNFetchBlob.wrap(pathToImage)
  );
};

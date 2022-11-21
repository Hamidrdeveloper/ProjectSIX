import {Platform} from 'react-native';
import {BASE_URL, TOKEN} from '../../utils/main';

class FileDataService {
  uploadFile(photo) {
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('authorization', `Bearer ${TOKEN}`);
    myHeaders.append('Referer', 'https://tobeclean.de');

    var formdata = new FormData();
    formdata.append('file', {
      name: photo?.fileName,
      type: photo?.type,
      uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    return fetch(BASE_URL, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
}
export default new FileDataService();

import httpService from './httpService';
import config from '../config.json';

const dogUrl = config.dogUrl;


export async function getDogs() {
   const response  = httpService.get(dogUrl).then((response) => 
       {
        if (response && response.data.status === 'success') {
            return response.data.message;
        }
       }
   );

}

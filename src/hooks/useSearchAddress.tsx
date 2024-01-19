import axios from 'axios';
import { useCallback } from 'react';
// import { tuple } from 'yup';

type AddressType = {
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
  prefcode: string;
  zipcode: string;
};
type ResponseType = {
  results: AddressType[];
  message: string | null;
  status: 200 | 400;
};
type RequestType = number;

export default function useSearchAddress<RequestData = RequestType, ResponseData = ResponseType>(zip: RequestData) {
  return useCallback(() => {
    return axios<ResponseData>({
      method: 'GET',
      url: 'https://zipcloud.ibsnet.co.jp/api/search',
      params: {
        zipcode: zip,
      },
    });
  }, [zip]);
}

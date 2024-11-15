import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  postalCode: string;
  prefecture: string;
  city: string;
};

export const usePostalCodeForm = () => {
  const { register, handleSubmit, setValue, formState: { errors }, watch, clearErrors } = useForm<FormData>();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const postalCode = watch("postalCode");

  const searchAddress = async (postalCode: string) => {
    try {
      const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postalCode}`);
      const data = await response.json();
      if (data.results) {
        const address = data.results[0];
        setValue("prefecture", address.address1);
        setValue("city", `${address.address2} ${address.address3}`);
        setErrorMessage("");
      } else {
        setErrorMessage("該当する住所が存在しません");
        setValue("prefecture", "");
        setValue("city", "");
      }
    } catch (error) {
      setErrorMessage("エラーが発生しました。再度お試しください。");
    }
  };

  useEffect(() => {
    if (postalCode && postalCode.length === 7) {
      searchAddress(postalCode);
    } else {
      setErrorMessage("");
      setValue("prefecture", "");
      setValue("city", "");
      clearErrors("postalCode");
    }
  }, [postalCode, setValue, clearErrors]);

  return {
    register,
    handleSubmit,
    setValue,
    errors,
    errorMessage,
    clearErrors,
  };
};

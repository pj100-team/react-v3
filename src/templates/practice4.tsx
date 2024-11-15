import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { usePostalCodeForm } from '../hooks/usePostalCodeForm';

type FormData = {
  postalCode: string;
  prefecture: string;
  city: string;
};

const Practice4 = () => {
  const { register, handleSubmit, setValue, formState: { errors }, watch, clearErrors } = useForm<FormData>();
  const [errorMessage, setErrorMessage] = useState("");

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
    if (postalCode) {
      if (postalCode.length === 7) {
        searchAddress(postalCode);
      } else {

        setErrorMessage("");
        setValue("prefecture", "");
        setValue("city", "");
        clearErrors("postalCode");
      }
    }
  }, [postalCode, setValue, clearErrors]);

  const onSubmit = (data: FormData) => {
    console.log("入力された値:", data);
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-white">
      <div className="w-96 space-y-4 mt-4">
        <div className="space-y-4">
          <div>
            <label htmlFor="postalCode" className="block text-lg font-medium mb-2">郵便番号</label>
            <input
              {...register("postalCode", {
                required: "必須項目です",
                pattern: {
                  value: /^[0-9]{7}$/,
                  message: "7桁の数字を入力してください"
                }
              })}
              id="postalCode"
              className="border rounded px-4 py-2 w-full"
            />
            {errors.postalCode && <p className="text-red-500 text-sm mt-2">{errors.postalCode.message}</p>}
          </div>

          <div>
            <label htmlFor="prefecture" className="block text-lg font-medium mb-2">都道府県</label>
            <input
              {...register("prefecture", { required: "必須項目です" })}
              id="prefecture"
              className="border rounded px-4 py-2 w-full"
              disabled
            />
            {errors.prefecture && <p className="text-red-500 text-sm mt-2">{errors.prefecture.message}</p>}
          </div>

          <div>
            <label htmlFor="city" className="block text-lg font-medium mb-2">市区町村</label>
            <input
              {...register("city", { required: "必須項目です" })}
              id="city"
              className="border rounded px-4 py-2 w-full"
              disabled
            />
            {errors.city && <p className="text-red-500 text-sm mt-2">{errors.city.message}</p>}
          </div>
        </div>

        {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

        <div className="flex justify-center">
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition duration-200 mt-4"
          >
            送信
          </button>
        </div>
      </div>
    </div>
  );
};

export default Practice4;
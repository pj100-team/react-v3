import React, { useEffect, useState } from 'react';
import Input from '../elements/Input';
import Button from '../elements/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface Inputs {
  zipcode: string;
  prefecture: string;
  city: string;
}

const Practice4 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm<Inputs>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data, '入力されたデータ');

  const zipcodeValue = watch('zipcode');
  // console.log(zipcodeValue);

  // useEffect(() => {
  //   if (zipcodeValue?.length === 7) {
  //     axios.get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcodeValue}`).then((res) => {
  //       console.log(res.data);
  //     });
  //   }
  // }, [zipcodeValue]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcodeValue}`);
      const data = await response.json();

      if (data.results) {
        const result = data.results[0];
        setValue('prefecture', result.address1);
        setValue('city', result.address2 + result.address3);
        clearErrors('zipcode');
      } else {
        setError('zipcode', { type: 'manual', message: '該当する住所が存在しません' });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (zipcodeValue?.length === 7) {
      console.log(zipcodeValue, 'zipcodeValue');
      fetchData();
    }
  }, [zipcodeValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col m-auto w-fit">
      <p className="mt-4 mb-4 m-auto">addressSearch</p>
      <div className="flex mb-8 items-start">
        <p className="w-20 mt-2.5 flex-shrink-0">郵便番号</p>
        <div className="flex flex-col">
          <Input
            {...register('zipcode', {
              required: '必須項目です',
              maxLength: { value: 7, message: '7桁の数字を入力してください' },
              minLength: { value: 7, message: '7桁の数字を入力してください' },
            })}
            type="text"
            className="border-2 border-gray-300 rounded-md p-2"
          />
          <div>{errors.zipcode && <p className="text-red-500 text-sm">{errors.zipcode.message}</p>}</div>
        </div>
      </div>
      <div className="flex mb-8 items-start">
        <p className="w-20 mt-2.5 flex-shrink-0">都道府県</p>
        <div>
          <Input
            {...register('prefecture', { required: '必須項目です' })}
            type="text"
            className="border-2 border-gray-300 rounded-md p-2"
          />
          <div>{errors.prefecture && <p className="text-red-500 text-sm">{errors.prefecture.message}</p>}</div>
        </div>
      </div>
      <div className="flex mb-8 items-start">
        <p className="w-20 mt-2.5 flex-shrink-0">市区町村</p>
        <div>
          <Input
            {...register('city', { required: '必須項目です' })}
            type="text"
            className="border-2 border-gray-300 rounded-md p-2"
          />
          <div>{errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}</div>
        </div>
      </div>
      <div className="mt-4 m-auto">
        {errors.zipcode?.type === 'manual' ? (
          <p className="text-red-500 font-bold">{errors.zipcode.message}</p>
        ) : (
          <Button label="送信" type="submit" backgroundColor="bg-gray-400" />
        )}
      </div>
    </form>
  );
};

export default Practice4;

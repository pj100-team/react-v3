import React from 'react';
import Input from '../elements/Input';
import Button from '../elements/Button';
import { useAddress } from '../hooks/useAddress';

const Practice4 = () => {
  const { onSubmit, register, handleSubmit, errors } = useAddress();
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

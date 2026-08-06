import { useCallback, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

export interface Inputs {
  zipcode: string;
  prefecture: string;
  city: string;
}

export const useAddress = () => {
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

  const fetchData = useCallback(
    async (zipcode: string) => {
      try {
        const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`);
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
    },
    [setValue, clearErrors, setError],
  );

  useEffect(() => {
    if (zipcodeValue?.length === 7) {
      console.log(zipcodeValue, 'zipcodeValue');
      fetchData(zipcodeValue);
    }
  }, [zipcodeValue, fetchData]);
  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
  };
};
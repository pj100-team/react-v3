import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import styles from './components/Address.module.scss';

type FormData = {
  zipcode: string;
  city: string;
  street: string;
};

const Practice4 = () => {
  const {
    register,
    watch,
    getValues,
    setValue,
    setError,
    clearErrors,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  useEffect(() => {
    const zipcodeValue = getValues('zipcode');
    if (zipcodeValue.length == 7) {
      const getAddress = async () => {
        await axios
          .get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcodeValue}`)
          .then((results) => {
            console.log(results.data);
            setValue('city', results.data.results[0].address1);
            setValue('street', results.data.results[0].address2 + results.data.results[0].address3);
            clearErrors();
          })
          .catch((error) => {
            console.log('error', error.status);
            setError('zipcode', {
              type: error.status,
              message: '該当する住所が存在しません',
            });
          });
      };
      getAddress();
    } else if (zipcodeValue.length == 0) {
      clearErrors('zipcode');
    } else {
      setError('zipcode', {
        message: '7桁の数字を入力してください',
      });
      resetField('city');
      resetField('street');
    }
  }, [watch('zipcode')]);

  return (
    <div className={styles.container}>
      <h2>Address Search</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>郵便番号</label>
          <input
            {...register('zipcode', {
              required: {
                value: true,
                message: '必須項目です',
              },
            })}
          />
          {errors.zipcode?.message && <p className={styles.errorMessage}>{errors.zipcode?.message}</p>}
        </div>
        <div>
          <label>都道府県</label>
          <input
            {...register('city', {
              required: {
                value: true,
                message: '必須項目です',
              },
            })}
          />
          {errors.city?.message && <p className={styles.errorMessage}>{errors.city?.message}</p>}
        </div>
        <div>
          <label>市区町村</label>
          <input
            {...register('street', {
              required: {
                value: true,
                message: '必須項目です',
              },
            })}
          />
          {errors.street?.message && <p className={styles.errorMessage}>{errors.street?.message}</p>}
        </div>
        <div className={styles.center}>
          <input type="submit" className={styles.btn} />
        </div>
      </form>
    </div>
  );
};

export default Practice4;

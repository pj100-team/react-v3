import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState, useEffect } from 'react';
import useSearchAddress from '../hooks/useSearchAddress';

const schema = yup
  .object()
  .shape({
    zip: yup
      .string()
      .label('郵便番号')
      .required('必須項目です')
      .matches(/^\d{7}$/, '7桁の数字を入力してください'),
    pref: yup.string().label('都道府県').required('必須項目です'),
    city: yup.string().label('市区町村').required('必須項目です'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const Practice4: React.FC = () => {
  const [isSubmitable, setIsSubmitable] = useState<Boolean>(true);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      zip: '',
      pref: '',
      city: '',
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const searchAddress = useSearchAddress(Number(getValues('zip')));

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  const handleKeyDown = (e: { key: string; preventDefault: () => void }) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };
  const onError: SubmitErrorHandler<FormData> = () => {
    console.error(`正しく送信できませんでした。\nエラー内容を修正の上、再度送信をお願いいたします。`);
  };

  useEffect(() => {
    if (!getValues('zip')) return;
    (async () => {
      try {
        const result = await searchAddress();

        console.log(result);
        if (result.data?.results) {
          setValue('pref', result.data?.results[0].address1);
          setValue('city', result.data?.results[0].address2);
          setIsSubmitable(true);
        } else {
          setValue('pref', '');
          setValue('city', '');
          setIsSubmitable(false);
        }
        trigger();
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getValues, searchAddress, setValue, trigger]);

  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-bold text-center text-sm">addressSearch</h4>
      <form
        className="flex items-center flex-col py-3 gap-10"
        onSubmit={handleSubmit(onSubmit, onError)}
        onKeyDown={handleKeyDown}
        noValidate
      >
        <div className="flex">
          <label className="font-bold" htmlFor="zip">
            郵便番号
          </label>
          <div className="ml-2 relative">
            <input className="p-form__input" id="zip" type="text" {...register('zip')} />
            {errors.zip?.message && <p className="p-form__error">{errors.zip.message}</p>}
          </div>
        </div>
        <div className="flex">
          <label className="font-bold" htmlFor="pref">
            都道府県
          </label>
          <div className="ml-2 relative">
            <input className="p-form__input" id="pref" type="text" {...register('pref')} />
            {errors.pref && <p className="p-form__error">{errors.pref.message}</p>}
          </div>
        </div>
        <div className="flex">
          <label className="font-bold" htmlFor="city">
            市区町村
          </label>
          <div className="ml-2 relative">
            <input className="p-form__input" id="city" type="text" {...register('city')} />
            {errors.city && <p className="p-form__error">{errors.city.message}</p>}
          </div>
        </div>
        {isSubmitable ? (
          <button className="p-form__submit" type="submit">
            送信
          </button>
        ) : (
          <p className="text-red-600 mt-12">該当する住所がありません</p>
        )}
      </form>
    </div>
  );
};

export default Practice4;

import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState, useEffect } from 'react';
import useSearchAddress from '../hooks/useSearchAddress';
import { isAxiosError } from 'axios';

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
        if (isAxiosError(e)) console.error(e);
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
            <input className=" border-gray-200 border-2 rounded-sm px-1" id="zip" type="text" {...register('zip')} />
            {errors.zip?.message && (
              <p className="text-red-600 whitespace-nowrap absolute top-7">{errors.zip.message}</p>
            )}
          </div>
        </div>
        <div className="flex">
          <label className="font-bold" htmlFor="pref">
            都道府県
          </label>
          <div className="ml-2 relative">
            <input className="border-gray-200 border-2 rounded-sm px-1" id="pref" type="text" {...register('pref')} />
            {errors.pref && <p className="text-red-600 whitespace-nowrap absolute top-7">{errors.pref.message}</p>}
          </div>
        </div>
        <div className="flex">
          <label className="font-bold" htmlFor="city">
            市区町村
          </label>
          <div className="ml-2 relative">
            <input className="border-gray-200 border-2 rounded-sm px-1" id="city" type="text" {...register('city')} />
            {errors.city && <p className="text-red-600 whitespace-nowrap absolute top-7">{errors.city.message}</p>}
          </div>
        </div>
        {isSubmitable ? (
          <button
            className="text-white bg-gray-400 rounded-lg w-fit py-2 px-8 mt-12 flex justify-center items-center transition hover:opacity-50"
            type="submit"
          >
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

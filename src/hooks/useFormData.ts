import { useForm} from 'react-hook-form'
import { object, string,InferType } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState} from 'react';
import ERROR_MESSAGE from '../messages'

const validationSchema = object().shape({
  postalCode: string()
    .required(ERROR_MESSAGE.required)
    .matches(/^\d{7}$/, ERROR_MESSAGE.not7digits),
  prefecture: string().required(ERROR_MESSAGE.required),
  city: string()
    .required(ERROR_MESSAGE.required),
}).required();

type FormData = InferType<typeof validationSchema>;

export const useFormData = () => {
  const [isSubmittable, setIsSubmitttable] = useState<boolean>(true);
  const [isSearchable, setIsSearchable] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState: { errors }, getValues,setValue,trigger,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      postalCode: '',
      prefecture: '',
      city: '',
    },
    mode: 'onBlur',reValidateMode: 'onBlur',
  });

  // Form submission handler
  const onSubmit = handleSubmit(data => {
    console.log(data);
  });    

  const onSearch = async() => 
    {
      const currentPostalCode = getValues('postalCode');
      if(!currentPostalCode.trim())
        setIsSearchable(false);

      else if(currentPostalCode.length===7)
      { 
        try
        {
          const response = await fetch("https://zipcloud.ibsnet.co.jp/api/search?zipcode="+currentPostalCode);
          const fields = await response.json();
          setValue("postalCode",currentPostalCode);
          setValue("prefecture",fields.results[0].address1);
          setValue("city",fields.results[0].address2);
          setIsSubmitttable(true);
        }

        catch (error) {
          setValue('city', '');
          setValue('prefecture', '');
          setIsSubmitttable(false);
        } finally {
          trigger();
        }
        setIsSearchable(true);
      }
    };
    return {
        register,errors,isSubmittable,isSearchable,onSubmit,onSearch,
      };
}
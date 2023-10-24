import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useFetchData from "./FetchData";

const whiteText: string = "text-[#f9fafb]";
const gray: string = "bg-slate-400";
const red: string = "text-red-500";
const requiredText: string = "必須項目です";
const zipCodeValidation: string = "7桁の数字を入力してください。";

interface FormInputs {
  zipCode: string;
  prefecture: string;
  city: string;
}

const AddressSearch = () => {
  const { addressList, fetchAddressData } = useFetchData();
  const postCodeRegex = /^\d{7}$/;
  const onSubmit = (data: FormInputs) => console.log(data);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormInputs>({
    criteriaMode: "all",
  });
  const zipCode = watch("zipCode");
  useEffect(() => {
    if (zipCode?.match(postCodeRegex)) {
      fetchAddressData(zipCode);
    }
  }, [zipCode]);

  useEffect(() => {
    if (addressList) {
      setValue("prefecture", addressList[0].address1, { shouldValidate: true });
      setValue("city", addressList[0].address2, { shouldValidate: true });
    } else {
      setValue("prefecture", "");
      setValue("city", "");
    }
  }, [addressList]);

  return (
    <>
      <div className={`flex justify-center ${gray} ${whiteText} py-3`}>
        <p>React-V3</p>
      </div>
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 郵便番号 */}
          <div className="flex justify-center my-10">
            <label className="mx-5">郵便番号</label>
            <div className="flex flex-col h-10">
              <input
                className="h-8 border-2"
                id="zipCode"
                {...register("zipCode", {
                  required: requiredText,
                  pattern: {
                    value: postCodeRegex,
                    message: zipCodeValidation,
                  },
                })}
              />
              {errors.zipCode && (
                <label className={red}>{errors.zipCode.message}</label>
              )}
            </div>
          </div>
          {/* 都道府県 */}
          <div className="flex justify-center my-10">
            <label className="mx-5">都道府県</label>
            <div className="flex flex-col h-10">
              <input
                className="h-8 border-2"
                id="prefecture"
                {...register("prefecture", {
                  required: requiredText,
                })}
              />
              {errors.prefecture && (
                <label className="text-red-500">
                  {errors.prefecture.message}
                </label>
              )}
            </div>
          </div>
          {/* 市区町村 */}
          <div className="flex justify-center my-10">
            <label className="mx-5">市区町村</label>
            <div className="flex flex-col h-10">
              <input
                className="h-8 border-2"
                id="city"
                {...register("city", {
                  required: requiredText,
                })}
              />
              {errors.city && (
                <label className={red}>{errors.city.message}</label>
              )}
            </div>
          </div>
          {/* 送信 */}
          <div className="flex justify-center py-5">
            {addressList === null ? (
              <label className={red}>該当する住所が存在しません</label>
            ) : (
              <button
                type="submit"
                className={`${whiteText} ${gray} py-2 px-4 rounded mx-5`}
              >
                送信
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default AddressSearch;

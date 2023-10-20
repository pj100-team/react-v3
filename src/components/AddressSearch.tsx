import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useFetchData from "./FetchData";

const color: string = "text-[#f9fafb]";
const gray: string = "bg-slate-400";
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
    }
  }, [addressList]);

  return (
    <>
      <div className="flex justify-center bg-slate-400 text-white py-3 my-10">
        <p>React-V3</p>
      </div>
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 郵便番号 */}
          <div className="flex justify-center my-10">
            <label className="mx-5">郵便番号</label>
            <div className="flex flex-col h-10">
              <input
                className=" h-8 border-2"
                id="zipCode"
                {...register("zipCode", {
                  required: {
                    value: true,
                    message: requiredText,
                  },
                  pattern: {
                    value: postCodeRegex,
                    message: zipCodeValidation,
                  },
                })}
              />
              {errors.zipCode && (
                <label className="text-red-500">
                  {errors.zipCode.message as string}
                </label>
              )}
            </div>
          </div>
          {/* 都道府県 */}
          <div className="flex justify-center my-10">
            <label className="mx-5">都道府県</label>
            <div className="flex flex-col h-10">
              <input
                className=" h-8 border-2"
                id="prefecture"
                {...register("prefecture", {
                  required: {
                    value: true,
                    message: requiredText,
                  },
                })}
              />
              {errors.prefecture && (
                <label className="text-red-500">
                  {errors.prefecture.message as string}
                </label>
              )}
            </div>
          </div>
          {/* 市区町村 */}
          <div className="flex justify-center my-10">
            <label className="mx-5">市区町村</label>
            <div className="flex flex-col h-10">
              <input
                className=" h-8 border-2"
                id="city"
                {...register("city", {
                  required: {
                    value: true,
                    message: requiredText,
                  },
                })}
              />
              {errors.city && (
                <label className="text-red-500">
                  {errors.city.message as string}
                </label>
              )}
            </div>
          </div>
          {/* 送信 */}
          <div className="flex justify-center py-5">
            <button
              type="submit"
              className={`${color} ${gray} py-2 px-4 rounded mx-5`}
            >
              送信
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddressSearch;

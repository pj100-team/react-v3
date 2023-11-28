import { useForm, useWatch } from "react-hook-form";
import { useState } from "react";
import PostCodeForm from "../components/PostCodeForm";
import PrefectureForm from "../components/PrefectureForm";
import CityTownVillageForm from "../components/CityTownVillageForm";
import SubmitButton from "../components/SubmitButton";

type Inputs = {
  PostCode: number;
  Prefecture: string;
  CityTownVillage: string;
};

const AddressSearch = () => {
  const [prefecture, setPrefecture] = useState("");
  const [city, setCity] = useState("");
  const [ad, setAd] = useState(true);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const PostCode = useWatch({ control, name: "PostCode" });

  return (
    <div className="container mx-auto text-center p-[20px] ">
      <h1 className="text-4xl">AddressSearch</h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="text-2xl"
      >
        <PostCodeForm
          register={register}
          control={control}
          errors={errors}
          setAd={setAd}
          setPrefecture={setPrefecture}
          setCity={setCity}
        />
        <PrefectureForm prefecture={prefecture} register={register} errors={errors}/>
        <CityTownVillageForm city={city} register={register} errors={errors} />
        <SubmitButton PostCode={PostCode} />

        {ad === false && (
          <p className="text-red-500">該当する住所が存在しません</p>
        )}
      </form>
    </div>
  );
};

export default AddressSearch;

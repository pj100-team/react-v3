import { FieldErrors, UseFormRegister, useForm } from "react-hook-form";
type Inputs = {
    PostCode: number;
    Prefecture: string;
    CityTownVillage: string;
  };
interface Props{
    prefecture: string
    register: UseFormRegister<Inputs>
    errors: FieldErrors<Inputs>;

}

const PrefectureForm = ({prefecture, register, errors}:Props)=>{

    
    return(
        <div className="p-[20px] ">
        <h2>都道府県</h2>
        <input
          style={{ border: "2px solid" }}
          {...register("Prefecture", { required: "必須項目です" })}
          value={prefecture}
        />
        <p className="text-red-500">{errors.Prefecture?.message}</p>
      </div>

    )
}

export default PrefectureForm
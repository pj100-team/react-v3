import { FieldErrors, UseFormRegister, useForm } from "react-hook-form";
type Inputs = {
    PostCode: number;
    Prefecture: string;
    CityTownVillage: string;
  };
interface Props{
    city: string
    register: UseFormRegister<Inputs>
    errors: FieldErrors<Inputs>
}

const CityTownVillageForm = ({city, register, errors}:Props)=>{

    return( 
        <div className="p-[20px] ">
        <h2>市区町村</h2>
        <input
          style={{ border: "2px solid" }}
          {...register("CityTownVillage", { required: "必須項目です" })}
          value={city}
        />
        <p className="text-red-500">{errors.CityTownVillage?.message}</p>
      </div>

    )
}

export default CityTownVillageForm
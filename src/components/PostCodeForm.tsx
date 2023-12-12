import {
  Control,
  FieldErrors,
  UseFormRegister,
  useWatch,
} from "react-hook-form";
type Inputs = {
  PostCode: number;
  Prefecture: string;
  CityTownVillage: string;
};
interface Props {
  setAd: React.Dispatch<React.SetStateAction<boolean>>;
  setPrefecture: React.Dispatch<React.SetStateAction<string>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  register: UseFormRegister<Inputs>;
  control: Control<Inputs, any>;
  errors: FieldErrors<Inputs>;
  getAddress: (PostCode: number) => Promise<void>;
}

const PostCodeForm = ({
  setAd,
  setPrefecture,
  setCity,
  register,
  control,
  errors,
  getAddress
}: Props) => {
  const PostCode = useWatch({ control, name: "PostCode" });

  return (
    <div className="container mx-auto p-[20px] ">
      <h2>郵便番号</h2>
      <input
        style={{ border: "2px solid" }}
        {...register("PostCode", {
          onChange: (e) => getAddress(e.target.value),
          required: "必須項目です",
          minLength: {
            value: 7,
            message: "7桁の数字を入力してください",
          },
          maxLength: {
            value: 7,
            message: "7桁の数字を入力してください",
          },
        })}
        placeholder="7桁の半角数字"
      />
      <p className="text-red-500">{errors.PostCode?.message}</p>
    </div>
  );
};

export default PostCodeForm;

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
type AddressType = {
  message: null;
  results: {
    address1: string;
    address2: string;
    address3: string;
    kana1: string;
    kana2: string;
    prefcode: string;
    zipcode: string;
  }[];
};
interface Props {
  setAd: React.Dispatch<React.SetStateAction<boolean>>;
  setPrefecture: React.Dispatch<React.SetStateAction<string>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  register: UseFormRegister<Inputs>;
  control: Control<Inputs, any>;
  errors: FieldErrors<Inputs>;
}

const PostCodeForm = ({
  setAd,
  setPrefecture,
  setCity,
  register,
  control,
  errors,
}: Props) => {
  const PostCode = useWatch({ control, name: "PostCode" });

  const fetchAddress = (PostCode: number): Promise<AddressType> => {
    return new Promise<AddressType>((resolve, reject) => {
      fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${PostCode}`)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .then((error) => reject(error));
    });
  };
  const getAddress = async (PostCode: number) => {
    if (String(PostCode).length === 7) {
      const fetchdata = await fetchAddress(PostCode);
      console.log(fetchdata);
      if (fetchdata.results === null) {
        console.log("該当する住所が存在しません");
        setAd(false);
      } else {
        setPrefecture(fetchdata.results[0].address1);
        setCity(fetchdata.results[0].address2);
      }
    }
  };

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

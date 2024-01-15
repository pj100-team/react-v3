import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState, useEffect } from "react";

const schema = yup
    .object()
    .shape({
        zip: yup
            .string()
            .label("郵便番号")
            .required("必須項目です")
            .matches(/^\d{7}$/, "7桁の数字を入力してください"),
        pref: yup.string().label("都道府県").required("必須項目です"),
        city: yup.string().label("市区町村").required("必須項目です"),
    })
    .required();
type FormData = yup.InferType<typeof schema>;

const Practice4: React.FC = () => {
    const [submitable, setSubmitable] = useState(true);
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        trigger,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            zip: "",
            pref: "",
            city: "",
        },
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        alert("送信完了しました");
    };
    const handleKeyDown = (e: { key: string; preventDefault: () => void }) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };
    const onError: any = (err: any) => {
        alert(
            `正しく送信できませんでした。\nエラー内容を修正の上、再度送信をお願いいたします。`
        );
    };

    useEffect(() => {
        const zipVal = getValues("zip");
        if (!zipVal) {
            setSubmitable(true);
            return;
        }
        const setAddress = async () => {
            try {
                const response = await axios.get(
                    "https://zipcloud.ibsnet.co.jp/api/search",
                    {
                        params: {
                            zipcode: Number(zipVal),
                        },
                    }
                );
                setValue("zip", response.data.results[0].zipcode);
                setValue("city", response.data.results[0].address2);
                setValue("pref", response.data.results[0].address1);
                setSubmitable(true);
            } catch (error) {
                setValue("city", "");
                setValue("pref", "");
                setSubmitable(false);
            } finally {
                trigger();
            }
        };
        setAddress();
    }, [getValues("zip")]);

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
                        <input
                            className="p-form__input"
                            id="zip"
                            type="text"
                            {...register("zip")}
                        />
                        {errors.zip?.message && (
                            <p className="p-form__error">
                                {errors.zip.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex">
                    <label className="font-bold" htmlFor="pref">
                        都道府県
                    </label>
                    <div className="ml-2 relative">
                        <input
                            className="p-form__input"
                            id="pref"
                            type="text"
                            {...register("pref")}
                        />
                        {errors.pref && (
                            <p className="p-form__error">
                                {errors.pref.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex">
                    <label className="font-bold" htmlFor="city">
                        市区町村
                    </label>
                    <div className="ml-2 relative">
                        <input
                            className="p-form__input"
                            id="city"
                            type="text"
                            {...register("city")}
                        />
                        {errors.city && (
                            <p className="p-form__error">
                                {errors.city.message}
                            </p>
                        )}
                    </div>
                </div>
                {submitable ? (
                    <button className="p-form__submit" type="submit">
                        送信
                    </button>
                ) : (
                    <p className="text-red-600 mt-12">
                        該当する住所がありません
                    </p>
                )}
            </form>
        </div>
    );
};

export default Practice4;

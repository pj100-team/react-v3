import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

type FormData = {
    postalcode: string;
    prefecture: string;
    city: string
}

const useAddressSearch = () => {
    const {
        register, 
        watch, 
        setValue, 
        handleSubmit,
        clearErrors,
        formState: {errors}
    } = useForm<FormData>();

    const postalcode = watch("postalcode");
    const [addressError, setAddressError] = useState<string>("");

    const onSubmit = (data: FormData) => {
        console.log(data);
    }
    useEffect(() => {
        if (postalcode?.length !== 7) {
            setValue("prefecture", "");
            setValue("city", "");
            setAddressError("");
            return;
        }

        const addressSearch = async() => {
            const response = await fetch(
                `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postalcode}`
            );
            const data = await response.json();
            
            if(data.results) {
                setValue("prefecture", data.results[0].address1);
                setValue("city", data.results[0].address2);
                setAddressError("");
                clearErrors(["prefecture", "city"])
            }
            else {
                setValue("prefecture", "");
                setValue("city", "");
                setAddressError("該当する住所が存在しません");
            }
        };

        addressSearch();

    }, [postalcode]);

    return {
        handleSubmit,
        onSubmit,
        register,
        errors,
        addressError
    }
}

export default useAddressSearch;
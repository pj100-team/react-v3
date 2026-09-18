import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import Button from "../components/button";

function Practice4(){
    type FormData = {
        postalcode: string;
        prefecture: string;
        city: string
    }
    const {
        register, 
        watch, 
        setValue, 
        handleSubmit,
        clearErrors,
        formState: {errors}
    } = useForm<FormData>();
    const postalcode = watch("postalcode");
    const [addressError, setAddressError] = useState("");
    const onSubmit = (data: FormData) => {
        console.log(data);
    }
    const fieldStyle = {
        display: "flex",
        alignItems: "center",
        gap: "12px",
    };
    const inputStyle = {
        height: "30px",
        width: "150px",
        border: "1px solid #94a3b8",
        borderRadius: "4px",
        padding: "0 8px"
    };
    const buttonStyle = {
        borderColor: "#94A3B8",
        backgroundColor: "#94A3B8",
        color: "#ffffff",
        width: "60px",
        height: "30px",
        borderRadius: "4px"
    }
    const errorStyle = {
        color: "red",
        fontSize: "12px",
        marginTop: "4px",
        marginLeft: "92px",
        height: "12px",
        width: "166px",
        textAlign: "left" as const
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

    return(
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "10px",
                marginTop: "40px"
            }}
        >
            <span>addressSearch</span>
            <div
                style={fieldStyle}
            >
                <label>郵便番号</label>
                <input 
                    type = "text"
                    style = {inputStyle}
                    {...register("postalcode", {
                        required: "必須項目です",
                        pattern:{
                            value: /^\d{7}$/,
                            message: "7桁の数字を入力してください"
                        }
                    })}
                />
            </div>
            <div
                style = {errorStyle}
            >
                {errors.postalcode?.message}
            </div>
            <div
                style={fieldStyle}
            >
                <label>都道府県</label>
                <input 
                    type = "text"
                    style = {inputStyle}
                    {...register("prefecture", {
                        required: "必須項目です"
                    })}
                />
            </div>
            <div
                style = {errorStyle}
            >
                {errors.prefecture?.message}
            </div>
            <div
                style={fieldStyle}
            >
                <label>市区町村</label>
                <input 
                    type = "text"
                    style = {inputStyle}
                    {...register("city", {
                        required: "必須項目です"
                    })}
                />
            </div>
            <div
                style = {errorStyle}
            >
                {errors.city?.message}
            </div>
            <div>
                {addressError ? 
                <span
                    style = {errorStyle}
                >
                    {addressError}
                </span>:                 
                <Button
                    name = "送信"
                    style = {buttonStyle}
                    onClick = {handleSubmit(onSubmit)}
                ></Button>
                }
            </div>
        </div>
    );
}

export default Practice4;
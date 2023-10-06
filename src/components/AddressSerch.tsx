import { useEffect, useState } from "react";
import "./App.css";
import { useForm, useWatch } from 'react-hook-form';
import axios from "axios";
import { clear } from "console";

function AddressSerch() {
    const [errorflag, setErrorflag] = useState(false); 

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        control,
        clearErrors,
    } = useForm({
        criteriaMode: 'all',
    });

    const PostCodeValue = useWatch({control,name:"address"})

    let getpre = "";
    let getcity = "";

    const onSubmit = (data: any) => {

        console.log("郵便番号: "+getValues('address'));
        console.log("都道府県: "+getValues("prefecture"));
        console.log("市区町村: "+getValues("city"));
    }

    useEffect(() => {
        if (PostCodeValue && PostCodeValue.length === 7) {
            CallAPI();
        }
    }, [PostCodeValue]);

    function CallAPI() {
        axios.get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${PostCodeValue}`)
            .then(function (response) {
                getpre = response.data.results[0].address1;
                getcity = response.data.results[0].address2 + response.data.results[0].address3;

                setValue('prefecture', getpre);
                setValue('city', getcity);
                setErrorflag(false);
                clearErrors('prefecture');
                clearErrors('city');
            })
            .catch(function (error) {
                setErrorflag(true);
            });
    }

    return (
        <div className="App">
            <header>
                React-v3
            </header>
            <h1>address search</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="InputForm">
                    <label>郵便番号</label>
                    <input
                        id="address"
                        {...register('address', {
                            required: {
                                value: true,
                                message: '入力が必須の項目です。',
                            },
                            minLength: {
                                value: 7,
                                message: '7桁の数字を入力してください',
                            },
                            maxLength: {
                                value: 7,
                                message: '7桁の数字を入力してください',
                            },
                        })}

                        type="address"
                    />
                    {errors.address && <div className="error">{errors.address?.message?.toString()}</div>}
                </div>
                <div className="InputForm">
                    <label>都道府県</label>
                    <input
                        id="prefecture"
                        {...register('prefecture', {
                            required: {
                                value: true,
                                message: '入力が必須の項目です。',
                            }
                        })}
                        type="text"

                    />
                    {errors.prefecture && <div className="error">{errors.prefecture?.message?.toString()}</div>}
                </div>
                <div className="InputForm">
                    <label>市区町村</label>
                    <input
                        id="city"
                        {...register('city', {
                            required: {
                                value: true,
                                message: '入力が必須の項目です。',
                            }
                        })}
                        type="text"
                    />
                    {errors.city && <div className="error">{errors.city?.message?.toString()}</div>}
                </div>
                <button type="submit">送信</button>
                <div className="NotFound">{errorflag? "該当する住所が存在しません": ""}</div>
            </form>
        </div>
    );
}

export default AddressSerch;

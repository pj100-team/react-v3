import Input from "../components/Input";
import Button from "../components/Button";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAddress from "../hooks/useAddress";

type AddressForm = {
	postalCode: string;
	prefecture: string;
	city: string;
};

const Practice4 = () => {
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm<AddressForm>({
		defaultValues: {
			postalCode: "",
			prefecture: "",
			city: "",
		},
	});

	const postalCode = watch("postalCode");
	const { address, error: searchError } = useAddress(postalCode);

	// 検索結果をフォームに反映する
	useEffect(() => {
		if (address) {
			setValue("prefecture", address.prefecture, { shouldValidate: true });
			setValue("city", address.city, { shouldValidate: true });
			return;
		}

		if (searchError) {
			setValue("prefecture", "");
			setValue("city", "");
		}
	}, [address, searchError, setValue]);

	const onSubmit: SubmitHandler<AddressForm> = (data) => {
		console.log(data);
	};

	const postalCodeError = errors.postalCode?.message ?? searchError;

	return (
		<>
			<h1 style={{ textAlign: "center", fontSize: "24px", marginTop: "24px" }}>
				addressForm
			</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "16px",
					marginTop: "24px",
				}}
			>
				<div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
					<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
						<label htmlFor="postalCode" style={{ width: "80px" }}>
							郵便番号
						</label>
						<Input
							type="text"
							id="postalCode"
							placeholder="100-0000"
							width="200px"
							height="40px"
							{...register("postalCode", {
								required: "必須項目です",
								pattern: {
									value: /^\d{3}-?\d{4}$/,
									message: "7桁の数字を入力してください",
								},
							})}
						/>
					</div>
					{postalCodeError && (
						<span
							style={{ color: "#ef4444", fontSize: "12px", marginLeft: "88px" }}
						>
							{postalCodeError}
						</span>
					)}
				</div>

				<div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
					<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
						<label htmlFor="prefecture" style={{ width: "80px" }}>
							都道府県
						</label>
						<Input
							type="text"
							id="prefecture"
							placeholder="東京都"
							width="200px"
							height="40px"
							{...register("prefecture", {
								required: "必須項目です",
							})}
						/>
					</div>
					{errors.prefecture && (
						<span
							style={{ color: "#ef4444", fontSize: "12px", marginLeft: "88px" }}
						>
							{errors.prefecture.message}
						</span>
					)}
				</div>

				<div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
					<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
						<label htmlFor="city" style={{ width: "80px" }}>
							市区町村
						</label>
						<Input
							type="text"
							id="city"
							placeholder="千代田区"
							width="200px"
							height="40px"
							{...register("city", {
								required: "必須項目です",
							})}
						/>
					</div>
					{errors.city && (
						<span
							style={{ color: "#ef4444", fontSize: "12px", marginLeft: "88px" }}
						>
							{errors.city.message}
						</span>
					)}
				</div>

				<div style={{ marginTop: "50px" }}>
					<Button
						type="submit"
						label="送信"
						backgroundColor="#94a3b8"
						textColor="#ffffff"
					/>
				</div>
			</form>
		</>
	);
};

export default Practice4;

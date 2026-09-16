import Input from "../components/Input";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const ZIPCLOUD_API_URL = "https://zipcloud.ibsnet.co.jp/api/search";

type ZipcloudResponse = {
	status: number;
	message: string | null;
	results:
		| {
				address1: string;
				address2: string;
				address3: string;
		  }[]
		| null;
};

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
	const [searchError, setSearchError] = useState<string>("");

	const postalCode = watch("postalCode");

	// 郵便番号が7桁になった時点で住所検索APIを呼ぶ
	useEffect(() => {
		const zipcode = postalCode.replace(/-/g, "");
		if (!/^\d{7}$/.test(zipcode)) {
			setSearchError("");
			return;
		}

		// 入力が変わって古いリクエストの結果が返ってきた場合は無視する
		let ignore = false;

		const searchAddress = async () => {
			try {
				const response = await fetch(`${ZIPCLOUD_API_URL}?zipcode=${zipcode}`);
				const data: ZipcloudResponse = await response.json();
				if (ignore) return;

				const address = data.results?.[0];
				if (!address) {
					setSearchError("該当する住所が存在しません");
					setValue("prefecture", "");
					setValue("city", "");
					return;
				}

				setSearchError("");
				setValue("prefecture", address.address1, { shouldValidate: true });
				setValue("city", `${address.address2}${address.address3}`, {
					shouldValidate: true,
				});
			} catch {
				if (ignore) return;
				setSearchError("住所の検索に失敗しました");
			}
		};

		searchAddress();

		return () => {
			ignore = true;
		};
	}, [postalCode, setValue]);

	const onSubmit: SubmitHandler<AddressForm> = (data) => {
		console.log(data);
	};

	const postalCodeError = errors.postalCode?.message ?? searchError;

	return (
		<>
			<div style={{ textAlign: "center", fontSize: "24px", marginTop: "24px" }}>
				addressForm
			</div>
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

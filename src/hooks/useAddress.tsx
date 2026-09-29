import { useEffect, useState } from "react";

const ZIPCLOUD_API_URL = "https://zipcloud.ibsnet.co.jp/api/search";

type ZipCloudResponse = {
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

type Address = {
	prefecture: string;
	city: string;
};

type UseAddressResult = {
	address: Address | null;
	error: string;
	isLoading: boolean;
};

// 郵便番号が7桁になった時点で住所検索APIを呼ぶ
const useAddress = (postalCode: string): UseAddressResult => {
	const [address, setAddress] = useState<Address | null>(null);
	const [error, setError] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const zipcode = postalCode.replace(/-/g, "");
		const isValidZipcode = /^\d{7}$/.test(zipcode);
		if (!isValidZipcode) {
			setAddress(null);
			setError("");
			setIsLoading(false);
			return;
		}

		// 入力が変わって古いリクエストの結果が返ってきた場合は無視する
		let ignore = false;
		setIsLoading(true);

		const searchAddress = async () => {
			try {
				const response = await fetch(`${ZIPCLOUD_API_URL}?zipcode=${zipcode}`);
				const data: ZipCloudResponse = await response.json();
				if (ignore) return;

				const result = data.results?.[0];
				if (!result) {
					setAddress(null);
					setError("該当する住所が存在しません");
					return;
				}

				setAddress({
					prefecture: result.address1,
					city: `${result.address2}${result.address3}`,
				});
				setError("");
			} catch {
				if (ignore) return;
				setAddress(null);
				setError("住所の検索に失敗しました");
			} finally {
				if (!ignore) setIsLoading(false);
			}
		};

		searchAddress();

		return () => {
			ignore = true;
		};
	}, [postalCode]);

	return { address, error, isLoading };
};

export default useAddress;

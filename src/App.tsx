import { useState } from "react";
import "./App.css";
import { Group } from "./components/templates/group";

type resultArray = {
	firstArray: Array<string>;
	secondArray: Array<string>;
	thirdArray: Array<string>;
	forthArray: Array<string>;
};
function App() {
	const attendees = [
		"武田",
		"野村",
		"リュウ",
		"植田",
		"森永",
		"西島",
		"那須",
		"平野",
		"小林",
		"中田",
		"加茂",
		"森平",
		"水盛",
		"三谷",
		"板垣",
		"梅原",
	];
	const min = 0;
	const max = attendees.length - 1;
	const manageNumber: Array<number> = [];
	const [result, setResult] = useState<resultArray>({
		firstArray: [],
		secondArray: [],
		thirdArray: [],
		forthArray: [],
	});

	//ランダム変数設定
	for (let i = min; i <= max; i++) {
		while (true) {
			var tmp = Math.floor(Math.random() * (max - min + 1)) + min;
			if (!manageNumber.includes(tmp)) {
				manageNumber.push(tmp);
				break;
			}
		}
	}

	//グループ生成
	const makeGroups = (array: Array<string>): resultArray => {
		const array1: Array<string> = [];
		const array2: Array<string> = [];
		const array3: Array<string> = [];
		const array4: Array<string> = [];
		manageNumber.forEach((item) => {
			if (array1.length <= 3) {
				array1.push(array[item]);
			} else if (array2.length <= 3) {
				array2.push(array[item]);
			} else if (array3.length <= 3) {
				array3.push(array[item]);
			} else {
				array4.push(array[item]);
			}
			setResult({
				firstArray: array1,
				secondArray: array2,
				thirdArray: array3,
				forthArray: array4,
			});
		});
		return result;
	};

	return (
		<>
			<div className="flex justify-center gap-10 mt-10">
				<div className="flex">
					<div>
						<Group groupArray={result.firstArray} />
					</div>
					<div>
						<Group groupArray={result.secondArray} />
					</div>
				</div>
				<div>
					<div className="flex mt-[120px]">
						<Group groupArray={result.thirdArray} />
					</div>
					<div className="flex">
						<Group groupArray={result.forthArray} />
					</div>
				</div>
			</div>
			<button
				className="mt-10 block mx-auto border border-gray-900 p-[10px] rounded"
				onClick={() => {
					makeGroups(attendees);
				}}
			>
				席替え
			</button>
		</>
	);
}

export default App;

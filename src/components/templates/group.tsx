type Props = {
	groupArray: Array<string>;
};

export const Group = ({ groupArray }: Props) => {
	return (
		<>
			{groupArray.map((item, index) => {
				return (
					<div
						key={index}
						className="border border-cyan-50 bg-sky-400 p-[20px] w-[100px] text-center"
					>
						{item}
					</div>
				);
			})}
		</>
	);
};

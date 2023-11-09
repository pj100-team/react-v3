type Props = {
	groupAArray: Array<string>;
};

export const Group = ({ groupAArray }: Props) => {
	return (
		<>
			{groupAArray.map((item, index) => {
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

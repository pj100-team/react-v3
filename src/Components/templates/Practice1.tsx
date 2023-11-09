interface Props {
	name: string;
	onClick: any;
	color: string;
}

const Practice1 = (props: Props) => {
	console.log(props);
	return (
		<>
			<button onClick={props.onClick}>{props.name}</button>
		</>
	);
};

export default Practice1;

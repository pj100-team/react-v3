interface Props {
  isChecked: boolean;
  handleCheckBox: any;
}

const AdPractice2 = (props: Props) => {
  const { handleCheckBox, isChecked } = props;

  return (
    <>
      <input type="checkbox" onChange={handleCheckBox} />
      {isChecked ? <div>Hello World</div> : <div></div>}
    </>
  );
};

export default AdPractice2;

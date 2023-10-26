interface Props {
  type: string;
  style: React.CSSProperties;
	//style: string;
	checkedConverter: ()=> void;
  isChecked: boolean;
}

const Input: React.FC<Props> = ({
    type,
    style,
    checkedConverter,
    isChecked
}) => {
  return (
    <div className="checkbox">
      <input
        type={type}
        checked={isChecked}
        onChange={checkedConverter}
        style={style}
      />
      {isChecked && <p>Hello World</p>} {/* チェックされている場合にのみ表示 */}
      </div>
  );
    //console.log(!isChecked);
  }

export default Input
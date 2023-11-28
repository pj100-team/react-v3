interface Props{
    PostCode: number
}

const SubmitButton = ({PostCode}:Props)=>{
    const handleClick = () => {
        console.log(PostCode);
      };
    
    return(
        <button
        type="submit"
        className="bg-[#94A3B8] text-center text-white px-5 py-2 rounded-md"
        onClick={handleClick}
      >
        送信
      </button>

    )


}
export default SubmitButton;
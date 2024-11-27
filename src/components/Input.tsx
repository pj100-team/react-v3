interface UserInputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    className?: string;
    value: string;
  }

  const UserInput = ({
    className = '',
    onChange,
    onClick,
    value,
  }: UserInputProps) => {
    return (
            <>
          <h2 className="text-4xl text-center mt-4 mb-4">TODOList</h2>
          <div className="m-auto flex flex-row mb-12 gap-4">
            <input
              type="text"
              value={value}
              onChange={onChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500"
            />
            <button
              onClick={onClick}
              className=' bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
            >
              追加
            </button>
          </div>
          </>
    );
};
export default UserInput;
import {Data} from "../hooks/useToDoList"
interface TableHeaderProps {
    onChange?: () => void;
    onClick?: () => void;
    checked?: boolean;
    className?: string; 
    todos: Data[];
  }

  const TableHeader = ({
    className = '',
    onChange,
    onClick,
    checked,
    todos,
  }: TableHeaderProps) => {
    return (
        <thead className="text-xl border-b-2 border-gray-300 py-2 px-4 bg-gray-100">
              <tr>
                <th className="relative text-xl font-bold text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                  />
                  {todos.some(todo => todo.isChecked) && (
                    <button
                      onClick={onClick}
                      className="absolute top-[-50px] px-2 py-1 w-16 h-8 text-xs bg-red-500 text-white rounded-md"
                    >
                      一括削除
                    </button>
                  )}
                </th>
                <th>登録日</th>
                <th>内容</th>
                <th>操作</th>
              </tr>
            </thead>
    );
}

export default TableHeader;
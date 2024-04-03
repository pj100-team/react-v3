import {useForm, SubmitHandler} from "react-hook-form";
import "./prac5.css";
import { useState } from "react";
import { FORM_DEFAULT_STATE } from "react-hook-form/dist/constants";
import { useId } from 'react';


// 入力するオブジェクト（１塊のTODO）の型定義
type Inputs = {
  regDay: string;
  toDo: string;
}

export default function Practice5() {
  // デフォルトのTODOリストの作成
  const [todos, setTodos] = useState<Inputs[]>([])
  // hookの使用
  const { register, handleSubmit, reset} = useForm<Inputs>();
  // 登録日の設定
  const now = new Date();
  const regDay = now.toLocaleDateString();
  
  // ToDoの追加
  const addToDo = (todo:string) =>{
    setTodos([...todos, {regDay: regDay, toDo: todo}]);
  }
　// ToDoの削除
  const deleteToDo = (index:number) =>{
    console.log(index)
    const newTodo = [...todos];　//未完了の配列を生成
    newTodo.splice(index, 1); //１つ目の引数に何番目の要素かを受け取り２つ目の要素にいくつ削除するか
    setTodos(newTodo); //未完了todo更新
    // setTodos([...todos, {regDay: regDay, toDo: todo}]);
  }
  // form送信時の処理
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
    addToDo(data.toDo)
    reset()
  }
  // ヘッダーのチェックボックスの判定
  const [checkedStates, setCheckedStates] = useState(new Array(todos.length).fill(false));

/*
ヘッダー内のチェックボックスを押したらイベントが発火
他のチェックボックスをtrueにする
　キーか何かで指定？
一括削除ボタンを表示
チェックが入ってる列のインデックスを取得
インデックスに対応するデータを削除
再表示
*/
  // チェックボックスの状態をトグルする関数
  const toggleCheckBox = (index:number) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  }

  const bulkDeletion = () =>{
    console.log("一括削除を実行しようとしています");
    const newCheckedStates = new Array(todos.length).fill(true);
    setCheckedStates(newCheckedStates)
    setBulkDeleteClicked(!bulkDeleteClicked)
  }

  const [bulkDeleteClicked, setBulkDeleteClicked] = useState(false); // 一括削除ボタンがクリックされたかどうかのフラグ

  // const bulkDeletionButton = (index:number) =>{}



    
   return(
    <div>
      <div>TODOList</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('toDo')}
          />
          
           <input type="submit" value='追加'/>
        </form>

        {bulkDeleteClicked && <input type="button" value='一括削除'/>}



        <table>
          <thead>
            <tr>
              <th><input type="checkbox" onClick={() =>bulkDeletion()}/></th>
              <th>登録日</th>
              <th>TODO</th>
              <th>削除</th>
            </tr>
          </thead>
          <tbody>
        
            {todos.map((todo, index) => (
              <tr key= {index}>
                <td><input type="checkbox"
                           checked={checkedStates[index]}
                           onChange={() => toggleCheckBox(index)}/></td>
                <td>{todo.regDay}</td>
                <td>{todo.toDo}</td>
                <td><input type="button" value='削除' onClick={() =>deleteToDo(index)}/></td>
              </tr>
            ))}

        
      </tbody>
        </table>
    </div>
   
  )
  

}
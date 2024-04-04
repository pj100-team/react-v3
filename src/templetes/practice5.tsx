import {useForm, SubmitHandler} from "react-hook-form";
import "./prac5.css";
import { useState } from "react";



// 入力するオブジェクト（１塊のTODO）の型定義
type Inputs = {
  regDay: string;
  toDo: string;
  isChecked: boolean;
}

export default function Practice5() {
  // デフォルトのTODOリストの作成
  const [toDos, setTodos] = useState<Inputs[]>([])
  // hookの使用
  const { register, handleSubmit, reset} = useForm<Inputs>();
  // ToDoの作成
  const [todo, setTodo] = useState<Inputs>({regDay:"", toDo:"",isChecked:false}) //formで送信したtoDo
  // 登録日の設定
  const now = new Date();
  const regDay = now.toLocaleDateString();
  
  // ToDoの追加
  const addToDo = (test:string) =>{
    setTodo({regDay:regDay, toDo:test, isChecked:false})
    setTodos(toDos => [...toDos, todo]);  //useStateに保存
  }
　// ToDoの削除
  const deleteToDo = (index:number) =>{
    // console.log(index)
    const newTodo = [...toDos];　//未完了の配列を生成
    newTodo.splice(index, 1); //１つ目の引数に何番目の要素かを受け取り２つ目の要素にいくつ削除するか
    setTodos(newTodo); //未完了todo更新
  }
  // form送信時の処理
  const onSubmit: SubmitHandler<Inputs> = data => {
    addToDo(data.toDo)
    reset()
 
  }

/* チェックボックスの状態を読み込む方法
toDosの状態を読見込む
その中からisCheckedにしぼってデータを抜き出す
それをsetCheckedStates?用いて更新する
*/



  // ヘッダーのチェックボックスの判定
  const [checkedStates, setCheckedStates] = useState(new Array(toDos.length).fill(false));
  const pickChecked = toDos.map(item =>{
    const test2 = item.isChecked
  }
    )

  // チェックボックスの状態をトグルする関数
  const toggleCheckBox = (index:number) => {
    setCheckedStates(pickChecked)
    // console.log(checkedStates)
    
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = {
      ...newCheckedStates[index],
      isChecked: !newCheckedStates[index].isChecked,
    };      
    setCheckedStates(() => newCheckedStates);
    // console.log(checkedStates)
  }

  const bulkDeletion = () =>{
    console.log("一括削除を実行しようとしています");
    const newCheckedStates = new Array(toDos.length).fill(true);
    setCheckedStates(newCheckedStates)
    setBulkDeleteClicked(!bulkDeleteClicked)
  }

  const [bulkDeleteClicked, setBulkDeleteClicked] = useState(false); // 一括削除ボタンがクリックされたかどうかのフラグ

  const bulkDeletionButton = toDos.filter(todo => !todo.isChecked)



    
   return(
    <div>
      <div>TODOList</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('toDo')}
          />
          
           <input type="submit" value='追加'/>
        </form>

        {bulkDeleteClicked && <input type="button" value='一括削除' onClick={() => bulkDeletionButton}/>}



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
        
            {toDos.map((toDo, index) => (
              <tr key= {index}>
                <td><input type="checkbox"
                           checked={checkedStates[index]}
                           onChange={() => toggleCheckBox(index)}/></td>
                <td>{toDo.regDay}</td>
                <td>{toDo.toDo}</td>
                <td><input type="button" value='削除' onClick={() =>deleteToDo(index)}/></td>
              </tr>
            ))}

        
      </tbody>
        </table>
    </div>
   
  )
  

}


/// checkedStates を使用

/*
// 入力するオブジェクト（１塊のTODO）の型定義
type Inputs = {
  regDay: string;
  toDo: string;
  isChecked: boolean;
}

export default function Practice5() {
  // デフォルトのTODOリストの作成
  const [toDos, setTodos] = useState<Inputs[]>([])
  // hookの使用
  const { register, handleSubmit, reset} = useForm<Inputs>();
  // ToDoの作成
  const [todo, setTodo] = useState<Inputs>({regDay:"", toDo:"",isChecked:false}) //formで送信したtoDo
  // 登録日の設定
  const now = new Date();
  const regDay = now.toLocaleDateString();
  
  // ToDoの追加
  const addToDo = (test:string) =>{
    setTodo({regDay:regDay, toDo:test, isChecked:false})
    setTodos([...toDos, todo]);  //useStateに保存
  }
　// ToDoの削除
  const deleteToDo = (index:number) =>{
    console.log(index)
    const newTodo = [...toDos];　//未完了の配列を生成
    newTodo.splice(index, 1); //１つ目の引数に何番目の要素かを受け取り２つ目の要素にいくつ削除するか
    setTodos(newTodo); //未完了todo更新
  }
  // form送信時の処理
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
    addToDo(data.toDo)
    console.log(toDos)
    reset()
 
  }
  // ヘッダーのチェックボックスの判定
  const [checkedStates, setCheckedStates] = useState(new Array(toDos.length).fill(false));



  // チェックボックスの状態をトグルする関数
  const toggleCheckBox = (index:number) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = {
      ...newCheckedStates[index],
      isChecked: !newCheckedStates[index].isChecked,
    };      
    setCheckedStates(() => newCheckedStates);
    console.log(checkedStates)
  }

  const bulkDeletion = () =>{
    console.log("一括削除を実行しようとしています");
    const newCheckedStates = new Array(toDos.length).fill(true);
    setCheckedStates(newCheckedStates)
    setBulkDeleteClicked(!bulkDeleteClicked)
  }

  const [bulkDeleteClicked, setBulkDeleteClicked] = useState(false); // 一括削除ボタンがクリックされたかどうかのフラグ

  const bulkDeletionButton = toDos.filter(todo => !todo.isChecked)



    
   return(
    <div>
      <div>TODOList</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('toDo')}
          />
          
           <input type="submit" value='追加'/>
        </form>

        {bulkDeleteClicked && <input type="button" value='一括削除' onClick={() => bulkDeletionButton}/>}



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
        
            {toDos.map((toDo, index) => (
              <tr key= {index}>
                <td><input type="checkbox"
                           checked={checkedStates[index]}
                           onChange={() => toggleCheckBox(index)}/></td>
                <td>{toDo.regDay}</td>
                <td>{toDo.toDo}</td>
                <td><input type="button" value='削除' onClick={() =>deleteToDo(index)}/></td>
              </tr>
            ))}

        
      </tbody>
        </table>
    </div>
   
  )
  

}

*/
import React from 'react';

interface TitleProps {
  title: string;
}

const LowTest = (props: TitleProps) => {
  const toDoList: string[] = ['借りる', '返す', '問い合わせ'];
  const showMessage = () => {
    alert('この機能が使えません');
  };
  return (
    <>
      <header>
        <h1>{props.title}</h1>
      </header>
      <main>
        <h2>FulAiのwebサイト</h2>
        <div>
          <h3>何をしたいですか</h3>
          {toDoList.map((text, index) => (
            <>
              <button onClick={showMessage} key={index}>
                {text}
              </button>
              <br></br>
            </>
          ))}
        </div>
      </main>
      <footer>
        <p>&copy;FulAi CORPORATION. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default LowTest;

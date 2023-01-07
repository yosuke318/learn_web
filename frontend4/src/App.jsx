import {ColoredMessage} from "./components/coloredMessage";

export const App = () => {

  const onClickButton = () => {
    alert()
  }

  // もちろんCSSを事前に定義することもできます。


  const contentPinkStyle = {
    color: "pink",
    fontSize: "20px"
  }

  return(
    <div>
      <h1 style={{color: "red"}}>こんにちは</h1>
      <ColoredMessage />
      <p style={contentPinkStyle}>元気です</p>
      <button onClick={onClickButton}>ボタン</button>
    {/*  buttonタグの属性に*/}
    </div>

);
  // 関数の返却値としてHTMLタグが記述でき、それをコンポーネントとして扱って画面を構成しています。
}
//　他のファイルでも使えるようexportします。
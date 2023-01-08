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
      {/*<ColoredMessage color={"green"} message={"お元気ですか(messageで渡す版)"} />*/}
      <ColoredMessage color={"red"}>お元気ですか？（childrenで渡す版）</ColoredMessage>
      {/*<ColoredMessage color={"pink"} message={"お元気です(messageで渡す版)"} />*/}
      <ColoredMessage color={"red"}>元気です！(childrenで渡す版)</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
    {/*  buttonタグの属性に*/}
    </div>

);
  // 関数の返却値としてHTMLタグが記述でき、それをコンポーネントとして扱って画面を構成しています。
}
//　他のファイルでも使えるようexportします。
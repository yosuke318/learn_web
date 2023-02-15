import {ColoredMessage} from "./components/coloredMessage";
import {useState, useEffect} from "react";
import {modalUnstyledClasses} from "@mui/material";

export const App = () => {

  const [num, setNum] = useState(0);

  // Stateの値が変わった時のみアラートを表示する。（初回も実行される）
  // useEffect(() => {
  //   alert()
  // }, [num])

  const onClickButton = () => {
    // setNum ((num) =>
    //   num + 1
    // )
    setNum ((num) =>
      num + 1
    )
    // setNum(num + 1)
    // setNum(num + 1)
    // 更新直前のStateの値が渡されるから、その値に1を足すことで同じ事が実現できる。
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
      <p>{num}</p>
    </div>

);
  // 関数の返却値としてHTMLタグが記述でき、それをコンポーネントとして扱って画面を構成しています。
}
//　他のファイルでも使えるようexportします。
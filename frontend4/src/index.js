import ReactDOM from "react-dom"
import {App} from "./App"


ReactDOM.render(<App />, document.getElementById("root"));

// 第一引数はHTMLの形ですがReactでは関数名をHTMLのようにタグで囲むことによってコンポーネントとして扱う事ができます

//第二引数はrootというidを指定していますがこれが何を指しているかというとpublic > index.htmlにあるdivタグを指しています
// SPAの場合、HTMLファイルは1つのみなのでこのようにアプリケーションのルートで「htmlのここにコンポーネントをレンダリングする」という指定してあげます。





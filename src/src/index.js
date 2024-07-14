import ReactDOM from "react-dom"

import {App} from "./App";


ReactDOM.render(
    // 今回はアプリ全体でcontextの値を参照するため、AppコンポーネントをAdminFlagProviderで囲む。
    <div>
        <App/>
    </div>,
    document.getElementById("root")
);
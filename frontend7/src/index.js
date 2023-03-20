import ReactDOM from "react-dom"

import {App} from "./App";
import {AdminFlagProvider} from "./components/providers/AdminFlagProvider";

ReactDOM.render(
    // 今回はアプリ全体でcontextの値を参照するため、AppコンポーネントをAdminFlagProviderで囲む。
    <AdminFlagProvider>
        <App/>
    </AdminFlagProvider>,
    document.getElementById("root")
);
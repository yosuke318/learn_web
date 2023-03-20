import {useContext} from "react";

import {AdminFlagContext} from "./providers/AdminFlagProvider";

const style = {
    width: "100px",
    padding: "6px",
    borderRadius: "8px",
};

export const EditButton = () => {
    // Context内のisAdminを取得
    const {isAdmin} = useContext(AdminFlagContext);

    return (
        // 管理者以外だと非表示
        <button style={style} disabled={!isAdmin}>
            編集
        </button>
    );
};
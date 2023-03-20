import {createContext, useState} from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = (props) => {
    const {children} = props;

    //　管理者フラグ
    const [isAdmin, setIsAdmin] = useState(false);

    // ContextオブジェクトとしてisAdminとsetIsAdmin(更新関数)を設定(オブジェクトの省略記法)
    // valueにグローバルで扱うデータを入れる。
    return (
        <AdminFlagContext.Provider value={{isAdmin, setIsAdmin}}>
            {children}
        </AdminFlagContext.Provider>
    );
};

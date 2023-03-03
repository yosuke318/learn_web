import {memo} from "react";
import {Child2} from "./Child2";
import {Child3} from "./Child3";

const style = {
    height: "200px",
    backgroundColor: "lightblue",
    padding: "8px"
};
export const Child1 = memo((props) => {
    console.log("Child1 レンダリング");

    const {onClickReset, onClickMulti, onClickUsememo} = props;

    return (
        <div style={style}>
            <p>Child1</p>
            <button onClick={onClickReset}>リセット</button>
            <button onClick={onClickMulti}>掛け算</button>
            <button onClick={onClickUsememo}>useMemo</button>
            <Child2/>
            <Child3/>
        </div>
    );
});
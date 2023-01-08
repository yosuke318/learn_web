// propsを親コンポーネントから渡します。
export const ColoredMessage = (props) => {

  const {color, children} = props

  const contentStyle = {
    // color:props.color,
    color:color,
    fontSize: "20px"
  };

  // return <p style={contentStyle}>{props.children}</p>;
  return <p style={contentStyle}>{children}</p>;
  // 分割代入を使うとprops.~という書き方が不要
}
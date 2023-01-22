import classes from "./CssModules.mocules.scss"


export const CssModules = () => {
  return (
      <div className={classes.container}>
        <p className={classes.title}>CSS Modulesです</p>
        <button className={classes.button}>ボタン</button>
      </div>
  );

};

//CSS Modulesについて
// .cssや.scssファイルを定義していく方法なので、デザイナーと一緒に進めていく場合などは有力な選択肢となります。

//todo scssの環境構築別途必要

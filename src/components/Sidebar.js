import style from "./sidebar.module.css";
import Popular from "./Popular";

export default function Sidebar(){
    return(
        <div className={style.Sidebar}>
            <div className={style.grid}>
                <div className={style.block}>
                    <p>Questions made</p>
                    <h1>2</h1>
                </div>
                <div className={style.block}>
                    <p>Answers given</p>
                    <h1>17</h1>
                </div>             
            </div>
            <button className={style.post} onClick={()=>console.log("clicked")}>Ask a question</button>
            <h4>Popular</h4>
            <div className={style.popular}>
                <Popular />
            </div>

        </div>
    )
}
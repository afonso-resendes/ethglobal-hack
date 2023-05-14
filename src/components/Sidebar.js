import style from "./sidebar.module.css";

export default function Sidebar(){
    return(
        <div className={style.Sidebar}>
            <div className={style.grid}>
                <div className={style.block}>
                    Questions
                </div>
                <div className={style.block}>
                    Answers
                </div>
                <div className={style.block}>
                    Questions
                </div>
                <div className={style.block}>
                    Questions
                </div>
                
            </div>
            <button onClick={()=>console.log("clicked")}>Ask a question</button>
            <h4>Popular</h4>

        </div>
    )
}
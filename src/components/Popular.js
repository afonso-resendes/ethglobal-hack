import style from "./Popular.module.css"
import Posts from "./PostsData"

export default function Popular(){
    function sortByOrder(a, b) {
        if (a.votes < b.votes) return -1;
        if (a.votes> b.votes) return 1;
        return 0;
      }

      const Pop = Posts.sort(sortByOrder).map(item => {return(
        <div className={style.card}>
            <h3>{item.title}</h3>
            <h4 className={style.description}>{item.content}</h4>
        </div>)}
    )
    
      return(
      <div>
      </div>)
    
}
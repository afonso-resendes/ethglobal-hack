import style from "./Home.module.css";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
import Posts from "./Posts";

function Home() {
    return (
        <div className={style.container}>
            
            <div className={style.main}>
                <div className={style.titles}>
                    <h1>SHARE YOUR KNOWLEDGE</h1>
                    <h4>And profit by helping others</h4>
                </div>
            </div>         
            
            <div className={style.menu}>
                <Menu />
            </div>

            
            <div className={style.content}>
                <Posts />
            </div>
            
            <div className={style.sidebar}>
                <Sidebar />
            </div>
        </div>
        
    );
}

export default Home;
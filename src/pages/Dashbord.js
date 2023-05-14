import style from '../style/Dashbord.module.css';

export default function Dashbord({setHomeScreen}) {
    const handleClick = () => {
        setHomeScreen(false);
    };

    return (
        <div className={style.titles}>
            <h1>SHARE YOUR KNOWLEDGE</h1>
            <h4>And profit by helping others</h4>
            <button className={style.question} onClick={handleClick}>Ask a question ...</button>
        </div>
    )
}
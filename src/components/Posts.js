import style from "./Posts.module.css";
import Post from "./PostsData.js"

export default function Posts() {

    const posts = Post.map((post) => {
        return (
            <div className={style.post} key={post.title}>
                <div className={style.left}>
                    <p className={style.expire_date}>{post.expire_date}</p>
                    <p className={style.reward}>{post.reward}ETH</p>
                    <p className={style.votes}>{post.votes}</p>

                </div>

                <div className={style.right}>
                    <p className={style.title}>{post.title}</p>
                    <p className={style.content}>{post.content}</p>
                </div>
                
            </div>
        )
    });

    return (
        <div className={style.container}>
            {posts}
        </div>
    );
}
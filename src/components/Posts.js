import style from "./Posts.module.css";

const post1 = {
    title: "Post 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissimLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,",
    expire_date: "2021-01-01",
    reward: 100,
    votes: 0,
}

const post2 = {
    title: "Post 2",
    content: "Lorem ipsum dolor sit amet, consecaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaatetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,",
    expire_date: "2021-01-01",
    reward: 100,
    votes: 15,
}

const post3 = {
    title: "Post 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscisssssssssssssssssssssssssssssssssssssssssssssssssng elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,",
    expire_date: "2021-01-01",
    reward: 100,
    votes: 5,
}

const post4 = {
    title: "Post 4",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,",
    expire_date: "2021-01-01",
    reward: 100,
    votes: 10,
}

const post5 = {
    title: "Post 5",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,",
    expire_date: "2021-01-01",
    reward: 100,
    votes: 20,
}

export default function Posts() {

    const posts = [post1, post2, post3, post4, post5].map((post) => {
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
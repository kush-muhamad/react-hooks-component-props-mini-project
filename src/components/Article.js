function Article({ title , date = "January 1, 1970" ,minutes , preview}) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <small> {minutes} min read </small>
        </article>
    );
}

export default Article;
    

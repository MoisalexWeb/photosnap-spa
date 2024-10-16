import "./ArticleCard.scss"
import Cta from "../Cta/Cta"

const ArticleCard = ({ title, text, href, image, date }) => {
    return (
        <article className="articleCard">
            <img src={image} alt={title} className="articleCard-img" />
            <div className="articleCard__texts">
                {
                    date && <p className="articleCard__texts-date">{date}</p>
                }
                <h3 className="articleCard__texts-title">{title}</h3>
                <p className="articleCard__texts-text">{text}</p>
            </div>
            <Cta
                color="#fff"
                text="Read story"
                href={href}
            />
        </article>
    )
}

export default ArticleCard
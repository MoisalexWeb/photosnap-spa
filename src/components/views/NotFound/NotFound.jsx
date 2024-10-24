import "./NotFound.scss"
import gif404 from "/images/this-is-fine-404.gif"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <section className="notFound">
            <h1 className="notFound-title">Resource not found ❌</h1>
            <img src={gif404} alt="This is fine gif" className="notFound-img" />
            <Link className="notFound-link" to="/">Go to home</Link>
        </section>
    )
}

export default NotFound
import "./Beta.scss"
import Cta from '../Cta/Cta'

const Beta = ({ title, ctaText, href }) => {
    return (
        <section className="beta">
            <div className="beta__content">
                <h2 className="beta-title">{title}</h2>
                <Cta 
                    color="#fff"
                    href={href}
                    text={ctaText}
                />
            </div>
        </section>
    )
}

export default Beta
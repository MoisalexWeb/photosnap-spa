import "./HeroHome.scss"
import Cta from "../Cta/Cta"

export const HeroHome = ({ title, text, color, ctaText, imgDesktop, imgTablet, imgMobile, background, line }) => {
    return (
        <section className="hero">
            <picture className="hero__picture">
                <source srcSet={imgMobile} alt="Man with a camera" media="(max-width: 450px)" />
                <source srcSet={imgTablet} alt="Man with a camera" media="(max-width: 768px)" />
                <img src={imgDesktop} alt="Man with a camera" className="hero-img" />
            </picture>

            <div className="hero__content"  style={{ backgroundColor: background, color: color }}>
                <div className={`hero__content__texts ${line ? "hero__content__texts--line" : ""}`}>
                    <h1 className="hero__content__texts-title">{title}</h1>
                    <p className="hero__content__texts-text">{text}</p>
                    {ctaText && <Cta href="#" text={ctaText} color={color} />}
                </div>
            </div>
        </section>
    )
}

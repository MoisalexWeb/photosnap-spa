import "./Home.scss"
import { heroImages, beautyImages, designImages, galleryImages, featuresImages } from "./importImages.js"
import Cta from "../../Cta/Cta.jsx"
import { HeroHome } from "../../HeroHome/HeroHome.jsx"
import Gallery from "../../Gallery/Gallery.jsx"
import ArticleCard from "../../ArticleCard/ArticleCard.jsx"
import FeatureCard from "../../FeatureCard/FeatureCard.jsx"
import FeatureCardContainer from "../../FeatureCardContainer/FeatureCardContainer.jsx"


export const Home = () => {

    return (
        <>
            <HeroHome
                title="create and share your photo stories"
                text="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
                ctaText="get an invite"
                imgDesktop={heroImages.desktop}
                imgTablet={heroImages.tablet}
                imgMobile={heroImages.mobile}
                background="#000"
                color="#fff"
                line={true}
            />

            <section className="beauty">
                <picture className="beauty__picture">
                    <source srcSet={beautyImages.mobile} alt="Computer with a baby photo" media="(max-width: 450px)" />
                    <source srcSet={beautyImages.tablet} alt="Computer with a baby photo" media="(max-width: 768px)" />
                    <img src={beautyImages.desktop} alt="Computer with a baby photo" className="beauty-img" />
                </picture>

                <div className="beauty__content">
                    <div className="beauty__content__texts">
                        <h1 className="beauty__content__texts-title">beautiful stories every time</h1>
                        <p className="beauty__content__texts-text">We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
                        <Cta href="#" text="view the stories" color="#000" />
                    </div>
                </div>
            </section>

            <HeroHome
                title="designed for everyone"
                text="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
                ctaText="get an invite"
                imgDesktop={designImages.desktop}
                imgTablet={designImages.tablet}
                imgMobile={designImages.mobile}
                background="#fff"
                color="#000"
            />

            <Gallery>
                <ArticleCard
                    title="the mountains"
                    text="by John Appleseed"
                    href="#"
                    image={galleryImages.mountains}
                />

                <ArticleCard
                    title="sunset cityscapes"
                    text="by Benjamin Cruz"
                    href="#"
                    image={galleryImages.cityscapes}
                />

                <ArticleCard
                    title="18 days voyage"
                    text="by Alexel Borodin"
                    href="#"
                    image={galleryImages.daysVoyage}
                />

                <ArticleCard
                    title="architecturals"
                    text="by Samantha Brooke"
                    href="#"
                    image={galleryImages.architecturals}
                />
            </Gallery>

            <FeatureCardContainer>
                <FeatureCard
                    image={featuresImages.responsive}
                    title="100% responsive"
                    description="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
                />

                <FeatureCard
                    image={featuresImages.unlimit}
                    title="no photo upload limit"
                    description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
                    marginTop={true}
                />

                <FeatureCard
                    image={featuresImages.embed}
                    title="available to embed"
                    description="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
                />
            </FeatureCardContainer>
        </>
    )
}

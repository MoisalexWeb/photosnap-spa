import { HeroHome } from "../../HeroHome/HeroHome"
import { heroDektop, heroTablet, heroMobile, responsive, unlimit, embed, boost, customDomain, dragDrop } from "./importImages.js"
import FeatureCard from "../../FeatureCard/FeatureCard"
import FeatureCardContainer from "../../FeatureCardContainer/FeatureCardContainer"
import Beta from "../../Beta/Beta.jsx"

export const Features = () => {
    return (
        <>
            <HeroHome
                title="Features"
                text="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
                background="#000"
                color="#fff"
                ctaText=""
                imgDesktop={heroDektop}
                imgTablet={heroTablet}
                imgMobile={heroMobile}
                line={true}
            />

            <FeatureCardContainer>
                <FeatureCard
                    title="100% responsive"
                    description="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
                    image={responsive}
                />

                <FeatureCard
                    title="no photo upload limit"
                    description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
                    image={unlimit}
                    marginTop={true}
                />

                <FeatureCard
                    title="available to embed"
                    description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
                    image={embed}
                />

                <FeatureCard
                    title="custom domain"
                    description="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
                    image={customDomain}
                />

                <FeatureCard
                    title="boost your exposure"
                    description="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
                    image={boost}
                />

                <FeatureCard
                    title="drag & drop image"
                    description="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
                    image={dragDrop}
                />
            </FeatureCardContainer>

            <Beta
                title="we're in beta. get your invite today!"
                ctaText="get an invite"
                href="#"
            />
        </>
    )
}

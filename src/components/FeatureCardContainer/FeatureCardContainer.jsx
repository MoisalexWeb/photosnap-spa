import "./FeatureCardContainer.scss"

const FeatureCardContainer = ({ children }) => {
    return (
        <section className="featureCardContainer">
            {children}
        </section>
    )
}

export default FeatureCardContainer
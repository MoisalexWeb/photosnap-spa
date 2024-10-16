import "./FeatureCard.scss"

const FeatureCard = ({ image, title, description, marginTop }) => {
    return (
        <div className="featureCard">

            <img src={image} alt={title} className={`featureCard-img ${marginTop  ? 'mt-20' : ''}`} />
            <h3 className="featureCard-title">{title}</h3>
            <p className="featureCard-text">{description}</p>
        </div>
    )
}

export default FeatureCard
import "./PricingCard.scss"


const PricingCard = ({ plan, price, text, time, main}) => {
    return (
        <div className={`pricingCard ${main ? 'pricingCard--main' : ''}`}>
            <p className="pricingCard-price">{price}</p>
            <p className="pricingCard-time">{time}</p>
            <h2 className="pricingCard-plan">{plan}</h2>
            <p className="pricingCard-text">{text}</p>
            <button className="pricingCard-cta">pick plan</button>
        </div>
    )
}

export default PricingCard
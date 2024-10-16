import "./Pricing.scss"
import { HeroHome } from "../../HeroHome/HeroHome"
import { heroDesktop, heroTablet, heroMobile, check } from "./importImages.js"
import Beta from "../../Beta/Beta.jsx"
import PricingCard from "../../PricingCard/PricingCard.jsx"
import { usePricing } from "./hook/usePricing.js"

export const Pricing = () => {
    const { plan, changePlan } = usePricing()

    return (
        <>
            <HeroHome
                title="pricing"
                text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
                color="#fff"
                background="#000"
                imgDesktop={heroDesktop}
                imgTablet={heroTablet}
                imgMobile={heroMobile}
                line={true}
            />

            <section className="pricing">
                <div className="pricing__filter">
                    <span className="pricing__filter-text">monthly</span>
                    <button className="pricing__filter__btn" onClick={changePlan}>
                        <span className={`pricing__filter__btn-bullet ${plan.name === 'month' ? 'left' : 'right'}`}></span>
                    </button>
                    <span className="pricing__filter-text">yearly</span>
                </div>

                <div className="pricingCards__container">
                    <PricingCard
                        price={plan.basicPrice}
                        time={`per ${plan.name}`}
                        plan="basic"
                        text="Includes basic usage of our platform. Recommended for new and aspiring photographers."
                    />

                    <PricingCard
                        price={plan.proPrice}
                        time={`per ${plan.name}`}
                        plan="pro"
                        text="More advanced features available. Recommended for photography veterans and professionals."
                        main={true}
                    />

                    <PricingCard
                        price={plan.businessPrice}
                        time={`per ${plan.name}`}
                        plan="business"
                        text="Additional features available such as more detailed metrics. Recommended for business owners."
                    />
                </div>
            </section>


            <section className="pricing__compare">
                <h2 className="pricing__compare-title">compare</h2>

                <table className="pricing__compare__table">
                    <thead>
                        <tr>
                            <td>the features</td>
                            <td>basic</td>
                            <td>pro</td>
                            <td>business</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>unlimited story postings</td>
                            <td>
                                <img src={check} alt="Check item" />
                            </td>
                            <td>
                                <img src={check} alt="Check item" />
                            </td><td>
                                <img src={check} alt="Check item" />
                            </td>
                        </tr>

                        <tr>
                            <td>unlimited photo upload</td>
                            <td>
                                <img src={check} alt="Check item" />
                            </td>
                            <td>
                                <img src={check} alt="Check item" />
                            </td><td>
                                <img src={check} alt="Check item" />
                            </td>
                        </tr>

                        <tr>
                            <td>embedding custom content</td>
                            <td></td>
                            <td>
                                <img src={check} alt="Check item" />
                            </td><td>
                                <img src={check} alt="Check item" />
                            </td>
                        </tr>

                        <tr>
                            <td>customize metadata</td>
                            <td></td>
                            <td>
                                <img src={check} alt="Check item" />
                            </td>
                            <td>
                                <img src={check} alt="Check item" />
                            </td>
                        </tr>

                        <tr>
                            <td>advanced metrics</td>
                            <td></td>
                            <td></td>
                            <td>
                                <img src={check} alt="Check item" />
                            </td>
                        </tr>

                        <tr>
                            <td>search engine indexing</td>
                            <td></td>
                            <td></td>
                            <td>
                                <img src={check} alt="Check item" />
                            </td>
                        </tr>

                        <tr>
                            <td>custom analytics</td>
                            <td></td>
                            <td></td>
                            <td>
                                <img src={check} alt="Check item" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <Beta
                title="we're in beta. get your invite today!"
                ctaText="get an invite"
                href="#"
            />
        </>
    )
}
import "./Stories.scss"
import Cta from "../../Cta/Cta.jsx"
import Gallery from "../../Gallery/Gallery.jsx"
import ArticleCard from "../../ArticleCard/ArticleCard.jsx"
import {
    mountains, cityscapes, daysVoyage, architecturals, behindWaves, calmWaters, darkForest, kingOnAfrica,
    landOfDreams, milkyWay, moon, rageOfSea, running, somwarpet, unforeseen, worldTour, tripToNowhere
} from "./importImages.js"


export const Stories = () => {
    return (
        <>
            <section className="hero__storie">
                <div className="hero__storie__texts">
                    <p className="hero__storie__texts-legend">last month's featured story</p>
                    <h1 className="hero__storie__texts-title">hazy full moon of appalachia</h1>
                    <p className="hero__storie__texts-date">March 2nd by John Appleseed</p>
                    <p className="hero__storie__texts-description">The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
                    <Cta
                        text="read the story"
                        href="#"
                        color="#fff"
                    />
                </div>
            </section>

            <Gallery>
                <ArticleCard
                    title="the mountains"
                    text="by John Appleseed"
                    href="#"
                    image={mountains}
                    date="April 16th 2020"
                />

                <ArticleCard
                    title="sunset cityscapes"
                    text="by Benjamin Cruz"
                    href="#"
                    image={cityscapes}
                    date="April 14th 2020"
                />

                <ArticleCard
                    title="18 days voyage"
                    text="by Alexel Borodin"
                    href="#"
                    image={daysVoyage}
                    date="April 11th 2020"
                />

                <ArticleCard
                    title="architecturals"
                    text="by Samantha Brooke"
                    href="#"
                    image={architecturals}
                    date="April 9th 2020"
                />

                <ArticleCard
                    title="world tour 2019"
                    text="by Timothy Wagner"
                    href="#"
                    image={worldTour}
                    date="April 7th 2020"
                />

                <ArticleCard
                    title="unforeseen corners"
                    text="by William Malcolm"
                    href="#"
                    image={unforeseen}
                    date="April 3rd 2020"
                />

                <ArticleCard
                    title="king on africa: part II"
                    text="by Tim Hillenburg"
                    href="#"
                    image={kingOnAfrica}
                    date="May 29th 2020"
                />

                <ArticleCard
                    title="the trip to nowhere"
                    text="by Felicia Rourke"
                    href="#"
                    image={tripToNowhere}
                    date="March 21st 2020"
                />

                <ArticleCard
                    title="rage of the sea"
                    text="by Mohammed Abdul"
                    href="#"
                    image={rageOfSea}
                    date="March 19th 2020"
                />

                <ArticleCard
                    title="running free"
                    text="by Michelle"
                    href="#"
                    image={running}
                    date="March 16th 2020"
                />

                <ArticleCard
                    title="behind the waves"
                    text="by Lamarr Wilson"
                    href="#"
                    image={behindWaves}
                    date="March 11th 2020"
                />

                <ArticleCard
                    title="calm waters"
                    text="by Samantha Brooke"
                    href="#"
                    image={calmWaters}
                    date="March 11th 2020"
                />

                <ArticleCard
                    title="the milky way"
                    text="by Benjamin Cruz"
                    href="#"
                    image={milkyWay}
                    date="March 5th 2020"
                />

                <ArticleCard
                    title="night at the dark fores"
                    text="by Mohamed Abdul"
                    href="#"
                    image={darkForest}
                    date="March 7th 2020"
                />

                <ArticleCard
                    title="somwarpet's beauty"
                    text="by Michael Leon"
                    href="#"
                    image={somwarpet}
                    date="March 1st 2020"
                />

                <ArticleCard
                    title="land of dreams"
                    text="by William Malcolm"
                    href="#"
                    image={landOfDreams}
                    date="February 25ft 2020"
                />
            </Gallery>
        </>
    )
}

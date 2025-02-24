import swiss1 from "../assets/Swiss1.jpg"
import swiss2 from "../assets/Swiss2.jpg"
import DestinationData from "./DestinationData"
import norway1 from "../assets/norway1.jpg"
import norway2 from "../assets/norway2.jpg"
import la1 from "../assets/la1.jpg"
import la2 from "../assets/la2.jpg"
import italy1 from "../assets/italy1.jpg"
import italy2 from "../assets/italy2.jpg"
import sp1 from "../assets/sp1.jpg"
import sp2 from "../assets/sp2.jpg"
import "./destinationStyles.css"

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give your the opportunity to see a lot,within a time frame.</p>
            <DestinationData
                className="first-des"
                heading="Switzerland"
                text="Switzerland, a land of natural beauty and tranquility, is known for its majestic landscapes, charming villages, and rich cultural heritage. The snow-capped peaks of the Swiss Alps, like the Matterhorn and Jungfrau, offer breathtaking views and world-class skiing. The picturesque cities of Zurich, Lucerne, and Geneva are hubs of history, art, and Swiss precision, offering serene lakesides, medieval architecture, and vibrant cultural experiences. Visitors can explore charming mountain villages, take scenic train journeys through the Swiss countryside, and enjoy Swiss chocolates and cheese, making Switzerland a dream destination for nature lovers and culture enthusiasts alike."
                img1={swiss1}
                img2={swiss2}
            />
            <DestinationData
                className="first-des-reverse"
                heading="Norway"
                text="Norway, a land of stunning natural beauty, offers travelers a unique experience with its dramatic landscapes, fjords, and rich Viking history. From the iconic Geirangerfjord to the Northern Lights in Tromsø, Norway is a paradise for nature enthusiasts and adventure seekers. Explore the vibrant city of Oslo, known for its museums, modern architecture, and beautiful parks, or visit Bergen, a gateway to the fjords with its charming wooden houses and colorful markets. Hiking in the Lofoten Islands or cruising along the Arctic coast, Norway’s untouched beauty and tranquil charm make it a must-visit destination."
                img1={norway1}
                img2={norway2}
            />
            <DestinationData
                className="first-des"
                heading="Las Vegas"
                text="Las Vegas, the entertainment capital of the world, is a dazzling city where excitement never ends. Known for its iconic Strip lined with world-renowned casinos, resorts, and show venues, Las Vegas offers a vibrant mix of nightlife, live performances, and fine dining. Explore the extravagant themed hotels, catch a famous Cirque du Soleil show, or try your luck at the gaming tables. During the day, visitors can enjoy pool parties, shopping, and nearby natural wonders like the Grand Canyon. With its bright lights, unforgettable experiences, and 24/7 energy, Las Vegas promises an adventure like no other."
                img1={la1}
                img2={la2}
            />
            <DestinationData
                className="first-des-reverse"
                heading="Italy"
                text="Norway, a land of stunning natural beauty, offers travelers a unique experience with its dramatic landscapes, fjords, and rich Viking history. From the iconic Geirangerfjord to the Northern Lights in Tromsø, Norway is a paradise for nature enthusiasts and adventure seekers. Explore the vibrant city of Oslo, known for its museums, modern architecture, and beautiful parks, or visit Bergen, a gateway to the fjords with its charming wooden houses and colorful markets. Hiking in the Lofoten Islands or cruising along the Arctic coast, Norway’s untouched beauty and tranquil charm make it a must-visit destination."
                img1={italy1}
                img2={italy2}
            />
            <DestinationData
                className="first-des"
                heading="Las Vegas"
                text="Las Vegas, the entertainment capital of the world, is a dazzling city where excitement never ends. Known for its iconic Strip lined with world-renowned casinos, resorts, and show venues, Las Vegas offers a vibrant mix of nightlife, live performances, and fine dining. Explore the extravagant themed hotels, catch a famous Cirque du Soleil show, or try your luck at the gaming tables. During the day, visitors can enjoy pool parties, shopping, and nearby natural wonders like the Grand Canyon. With its bright lights, unforgettable experiences, and 24/7 energy, Las Vegas promises an adventure like no other."
                img1={la1}
                img2={la2}
            />
            <DestinationData
                className="first-des-reverse"
                heading="Singapore"
                text="Singapore, a sleek and modern city-state, offers an exciting blend of futuristic architecture, lush green spaces, and diverse cultures. From the iconic Marina Bay Sands and the stunning Supertree Grove at Gardens by the Bay to the bustling markets of Chinatown and Little India, Singapore is a hub of innovation and tradition. Explore the vibrant street food scene, with must-try dishes like Hainanese chicken rice and chili crab, or enjoy a serene walk through the Singapore Botanic Gardens. Whether you're seeking world-class shopping, unique cultural experiences, or breathtaking views, Singapore is a destination that never fails to impress."
                img1={sp1}
                img2={sp2}
            />
            
            </div>
        

    )
}

export default Destination
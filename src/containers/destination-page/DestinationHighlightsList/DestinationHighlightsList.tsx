import React from "react";
import styles from "./DestinationHighlightsList.module.scss";
import DestinationHighlightsItem from "./DestinationHighlightsItem";
import HighlightOne from "../../../assets/images/route-image-0.png";
import HighlightTwo from "../../../assets/images/route-image-1.png";
import HighlightThree from "../../../assets/images/route-image-2.png";
import HighlightFour from "../../../assets/images/route-image-3.png";
import HighlightFive from "../../../assets/images/route-image-4.png";
import HighlightSix from "../../../assets/images/route-image-5.png";

const DestinationHighlightsList: React.FC = () => {
  return (
    <div className={styles.highlights_list}>
      <DestinationHighlightsItem
        imageUrl={HighlightOne}
        title="Fjord Like Bays"
        description="Where the sea meets the mountains. Sail the Bay of Kotor, often called Europe’s most southernmost fjord. Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless."
      />
      <DestinationHighlightsItem
        imageUrl={HighlightTwo}
        title="Nostalgic Coastal Towns"
        description="Perast, Kotor, Tivat, Budva, Sveti Stefan…Montenegro is full of traditional Mediterranean coastal towns where locals still live with the nature. Sustainable tourism, local way of life and world famous Montenegrin hospitality."
      />
      <DestinationHighlightsItem
        imageUrl={HighlightThree}
        title="Beach Parties"
        description="Summer Vibes at it’s best. The most amazing Montenegrin beaches, cocktails and live DJs. Dance the night away. "
      />
      <DestinationHighlightsItem
        imageUrl={HighlightFour}
        title="Wellness Oasis"
        description="Relax and enjoy swimming pool area, gym, yoga, massages and saunas in the freshly opened, chic, Lazure Marina. This traditional marina has everything you wish for, from fine dining restaurants to burger bars, cocktails and freshly squeezed fruit stands. Celebrate traditional Montenegrin hospitality and freshness of local produce. "
      />
      <DestinationHighlightsItem
        imageUrl={HighlightFive}
        title="Charterag Regatta"
        description="Is there anything better than sailing and having fun with your mates? Get behind the helm, pull ropes, switch sides and most important, have fun. On SailWeek there are no losers. Everybody wins!!!"
      />
      <DestinationHighlightsItem
        imageUrl={HighlightSix}
        title="Spectacular Mountain Views"
        description="Hike the peak of Lovcen mountain or catch a taxi to the top, for the most spectacular view of the surrounding mountains, postcard perfect cliffs and romantic bays."
      />
    </div>
  );
};

export default DestinationHighlightsList;

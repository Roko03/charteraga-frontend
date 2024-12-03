import React from "react";
import styles from "./DestinationHighlightsList.module.scss";
import DestinationHighlightsItem from "./DestinationHighlightsItem";
import HighlightOne from "../../../assets/images/route-image-0.png";

const DestinationHighlightsList: React.FC = () => {
  return (
    <div className={styles.highlights_list}>
      <DestinationHighlightsItem
        imageUrl={HighlightOne}
        title="Fjord Like Bays"
        description="Where the sea meets the mountains. Sail the Bay of Kotor, often called Europe’s most southernmost fjord. Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless."
      />
      <DestinationHighlightsItem
        imageUrl={HighlightOne}
        title="Fjord Like Bays"
        description="Where the sea meets the mountains. Sail the Bay of Kotor, often called Europe’s most southernmost fjord. Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless."
      />
      <DestinationHighlightsItem
        imageUrl={HighlightOne}
        title="Fjord Like Bays"
        description="Where the sea meets the mountains. Sail the Bay of Kotor, often called Europe’s most southernmost fjord. Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless."
      />
      <DestinationHighlightsItem
        imageUrl={HighlightOne}
        title="Fjord Like Bays"
        description="Where the sea meets the mountains. Sail the Bay of Kotor, often called Europe’s most southernmost fjord. Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless."
      />
    </div>
  );
};

export default DestinationHighlightsList;

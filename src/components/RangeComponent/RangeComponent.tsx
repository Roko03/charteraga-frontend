import React from "react";
import styles from "./RangeComponent.module.scss";

interface RangeComponentProps {
  rangeNumber: number;
  color?: string;
}

const RangeComponent: React.FC<RangeComponentProps> = ({
  rangeNumber,
  color = "#66B8FF",
}) => {
  return (
    <div className={styles.range}>
      <span style={{ width: `${rangeNumber}%`, backgroundColor: color }}></span>
    </div>
  );
};

export default RangeComponent;

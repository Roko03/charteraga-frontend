import React from "react";
import styles from "./RangeComponent.module.scss";

interface RangeComponentProps {
  rangeNumber: number;
  color?: string;
  backgroundColor?: string;
}

const RangeComponent: React.FC<RangeComponentProps> = ({
  rangeNumber,
  color = "#66B8FF",
  backgroundColor = "#f5f5f6",
}) => {
  return (
    <div className={styles.range} style={{ backgroundColor: backgroundColor }}>
      <span style={{ width: `${rangeNumber}%`, backgroundColor: color }}></span>
    </div>
  );
};

export default RangeComponent;

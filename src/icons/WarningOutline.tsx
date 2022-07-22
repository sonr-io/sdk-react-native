import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

function SvgComponent({ style }: { style?: StyleProp<ViewStyle> }) {
  return (
    <Svg width="16" height="16" style={style} viewBox="0 0 16 16" fill="none">
      <Path
        d="M8 9.16699C7.72667 9.16699 7.5 8.94033 7.5 8.66699V5.16699C7.5 4.89366 7.72667 4.66699 8 4.66699C8.27333 4.66699 8.5 4.89366 8.5 5.16699V8.66699C8.5 8.94033 8.27333 9.16699 8 9.16699Z"
        fill="#FF2866"
      />
      <Path
        d="M7.99967 11.4998C7.81967 11.4998 7.65299 11.4332 7.52633 11.3065C7.46633 11.2398 7.41968 11.1665 7.37968 11.0865C7.34635 11.0065 7.33301 10.9198 7.33301 10.8332C7.33301 10.6598 7.40633 10.4865 7.52633 10.3598C7.77299 10.1131 8.22636 10.1131 8.47302 10.3598C8.59302 10.4865 8.66634 10.6598 8.66634 10.8332C8.66634 10.9198 8.64633 11.0065 8.613 11.0865C8.57966 11.1665 8.53302 11.2398 8.47302 11.3065C8.34636 11.4332 8.17967 11.4998 7.99967 11.4998Z"
        fill="#FF2866"
      />
      <Path
        d="M8.00045 15.1667C7.55378 15.1667 7.10044 15.0534 6.70044 14.8201L2.74044 12.5334C1.94044 12.0667 1.44043 11.2067 1.44043 10.2801V5.72008C1.44043 4.79341 1.94044 3.93341 2.74044 3.46674L6.70044 1.18008C7.50044 0.713411 8.49379 0.713411 9.30046 1.18008L13.2605 3.46674C14.0605 3.93341 14.5605 4.79341 14.5605 5.72008V10.2801C14.5605 11.2067 14.0605 12.0667 13.2605 12.5334L9.30046 14.8201C8.90046 15.0534 8.44711 15.1667 8.00045 15.1667ZM8.00045 1.8334C7.72711 1.8334 7.44711 1.90674 7.20044 2.04674L3.24044 4.3334C2.7471 4.62006 2.44043 5.14674 2.44043 5.72008V10.2801C2.44043 10.8467 2.7471 11.3801 3.24044 11.6667L7.20044 13.9534C7.69377 14.2401 8.30712 14.2401 8.79378 13.9534L12.7538 11.6667C13.2471 11.3801 13.5538 10.8534 13.5538 10.2801V5.72008C13.5538 5.15341 13.2471 4.62006 12.7538 4.3334L8.79378 2.04674C8.55378 1.90674 8.27378 1.8334 8.00045 1.8334Z"
        fill="#FF2866"
      />
    </Svg>
  );
}

export default SvgComponent;

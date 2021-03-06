import { storiesOf } from "@storybook/react-native";
import React from "react";
import SecondaryButton from "../../../src/components/SecondaryButton";
import CenterViewDark from "../CenterViewDark";

storiesOf("SecondaryButton", module)
  .addDecorator((getStory) => <CenterViewDark>{getStory()}</CenterViewDark>)
  .add("with text", () => <SecondaryButton onPress={() => {}} text="Hello2" />);

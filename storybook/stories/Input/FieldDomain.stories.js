import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterViewDark from "../CenterViewDark";
import { ContainerLight } from "../../../src/components/ContainerLight";
import { TextWrapper } from "./TextWrapper";
import { ContainerDark } from "../../../src/components/ContainerDark";

storiesOf("Field domain text input", module)
  .addDecorator((getStory) => <CenterViewDark>{getStory()}</CenterViewDark>)
  .add("Regular State", () => (
    <ContainerDark>
      <TextWrapper lightTheme={false} />
    </ContainerDark>
  ))
  .add("Light theme State", () => (
    <ContainerLight>
      <TextWrapper lightTheme />
    </ContainerLight>
  ));

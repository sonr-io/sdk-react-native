import React, { useState } from "react";
import FieldDomain from "../../../src/components/FieldDomain";

type Props = {
  lightTheme: boolean;
};

export const TextWrapper: React.FC<Props> = ({ lightTheme }) => {
  const [username, setUsername] = useState("");
  return (
    <FieldDomain
      label=".snr domain"
      value={username}
      onChangeText={setUsername}
      lightTheme={lightTheme}
    />
  );
};

import React, { Dispatch, SetStateAction, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ViewStyle,
  StyleProp,
} from "react-native";
import WarningOutline from "../icons/WarningOutline";
import IconUser from "../icons/User";
import { ValidateUserName } from "@sonr-io/validation/dist/index";

type Props = {
  label: string;
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
  lightTheme?: boolean;
  autoFocus?: boolean;
  style?: StyleProp<ViewStyle>;
};
const FieldDomain: React.FC<Props> = (props: Props) => {
  const [warning, setWarning] = useState("");

  const styles = getStyles(!!props.lightTheme, props.value?.length > 0);

  const validateDomain = (text: string) => {
    const validation: boolean | Error = ValidateUserName(text);
    if (validation instanceof Boolean && validation) {
      return props.onChangeText(text);
    }
    setWarning((validation as Error).message);
    props.onChangeText(text);
  };

  let iconColor = props.lightTheme ? "#9893A2" : "#F6F5FA";

  return (
    <View style={props.style}>
      <Text style={[styles.labelText]}>{props.label}</Text>
      <View
        style={[styles.input, warning ? { borderColor: "#FF2866" } : undefined]}
      >
        {IconUser(warning ? "#FF2866" : iconColor)}
        <TextInput
          style={styles.textInput}
          value={props.value}
          onChangeText={validateDomain}
          autoFocus={props.autoFocus}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
        {props.value?.length > 0 && <Text style={styles.domain}>.snr</Text>}
        {warning ? <WarningOutline style={styles.warningIcon} /> : null}
      </View>
      {!!warning && <Text style={styles.warningText}>{warning}</Text>}
    </View>
  );
};

const getStyles = (lightTheme: boolean, domain: boolean) =>
  StyleSheet.create({
    input: {
      flexDirection: "row",
      borderColor: lightTheme ? "#AEACB8" : "#9893A2",
      borderStyle: "solid",
      borderWidth: 1,
      borderRadius: 6,
      alignItems: "center",
      paddingHorizontal: 12,
      width: "100%",
    },
    labelText: {
      fontFamily: "THICCCBOI_Regular",
      fontStyle: "normal",
      textAlign: "left",
      fontSize: 14,
      lineHeight: 16,
      color: lightTheme ? "#4F4A60" : "#F6F5FA",
      marginBottom: 8,
    },
    textInput: {
      flex: domain ? 0 : 1,
      paddingVertical: 12,
      marginLeft: 12,
      fontFamily: "THICCCBOI_Regular",
      fontSize: 16,
      color: lightTheme ? "#37324A" : "#F6F5FA",
    },
    domain: {
      fontFamily: "THICCCBOI_Regular",
      fontSize: 16,
      color: lightTheme ? "#37324A" : "#9693a2",
    },
    warningText: {
      fontFamily: "THICCCBOI_Medium",
      fontStyle: "normal",
      textAlign: "left",
      fontSize: 12,
      lineHeight: 16,
      color: "#FF2866",
    },
    warningIcon: {
      marginLeft: "auto",
    },
  });

export default FieldDomain;

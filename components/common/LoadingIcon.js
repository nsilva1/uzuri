import React from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

const LoadingIcon = (props) => {
  return (
    <div>
      <ActivityIndicator animating={true} color={Colors.props.iconColor} />
    </div>
  );
};

export default LoadingIcon;

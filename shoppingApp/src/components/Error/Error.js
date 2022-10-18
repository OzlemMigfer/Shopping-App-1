import React from "react";
import LottiView from 'lottie-react-native';

function Error(){
    return <LottiView source={require('../../assets/error-animation.json')} autoPlay/>;
};

export default Error;
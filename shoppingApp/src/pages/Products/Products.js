import React from "react";
import {Text, View} from 'react-native';
import styles from './Products.styles';
import Config from '../../../config';

const Products = () => {
    return(
        <View>
            <Text>PRODUCTS {Config.API_URL} </Text>
        </View>
    );
};

export default Products;
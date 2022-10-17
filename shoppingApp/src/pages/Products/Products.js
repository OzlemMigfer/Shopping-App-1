import React from "react";
import {Text, View} from 'react-native';
import styles from './Products.styles';
import Config from 'react-native-config';

const Products = () => {
    return(
        <View>
            <Text>PRODUCTS</Text>
            {Config.API_URL}
        </View>
    );
};

export default Products;
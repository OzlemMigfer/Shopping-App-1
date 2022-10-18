import React, {useState,useEffect} from "react";
import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import styles from './Products.styles';
import Config from '../../../config';
import axios from "axios";
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

const Products = () => {
    const {loading, data, error} = useFetch(Config.API_URL);
    
    const renderProduct = ({item}) => <ProductCard product={item} />;

    //spinner
    if(loading){
        return <ActivityIndicator size="large"/>
    }

    if(error){
        return <Text>{error}</Text>
    }

    return(
        <View>
            <FlatList data={data} renderItem={renderProduct}/>
        </View>
    );
};

export default Products;
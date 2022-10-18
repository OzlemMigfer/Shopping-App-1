import React, {useState,useEffect} from "react";
import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import styles from './Products.styles';
import Config from '../../../config';
import axios from "axios";
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from "../../components/Loading/Loading";
import Error from '../../components/Error/Error';

const Products = ({navigation}) => {
    const {loading, data, error} = useFetch(Config.API_URL);

    const handleProductSelect = id => {
        navigation.navigate('DetailPage', {id});
    };
    
    const renderProduct = ({item}) => (
        <ProductCard product={item} onSelect={() => handleProductSelect(item.id)}/>
    );

    //spinner animation
    if(loading){
        return <Loading/>
    }

    if(error){
        return <Error/>
    }

    return(
        <FlatList data={data} renderItem={renderProduct}/>
    );
};

export default Products;
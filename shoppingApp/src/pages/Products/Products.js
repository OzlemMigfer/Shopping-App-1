import React, {useState,useEffect} from "react";
import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import styles from './Products.styles';
import Config from '../../../config';
import axios from "axios";
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from "../../components/Loading/Loading";
import Error from '../../components/Error/Error';

const Products = () => {
    const {loading, data, error} = useFetch(Config.API_URL);
    
    const renderProduct = ({item}) => <ProductCard product={item} />;

    //spinner animation
    if(loading){
        return <Loading/>
    }

    if(error){
        return <Error/>
    }

    return(
        <View>
            <FlatList data={data} renderItem={renderProduct}/>
        </View>
    );
};

export default Products;
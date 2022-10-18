import React, {useState,useEffect} from "react";
import {Text, View, FlatList} from 'react-native';
import styles from './Products.styles';
import Config from '../../../config';
import axios from "axios";
import ProductCard from '../../components/ProductCard';

const Products = () => {
    const[data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    //verileri çekerken promise yapısını kullanıyoruz
    const fetchData = async () => {
        const {data: productData} = await axios.get(Config.API_URL);
        setData(productData);
    };

    const renderProduct = ({item}) => <ProductCard product={item} />;

    return(
        <View>
            <FlatList data={data} renderItem={renderProduct}/>
        </View>
    );
};

export default Products;
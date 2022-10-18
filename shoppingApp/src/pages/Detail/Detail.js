import React, { useEffect } from "react";
import {Text, View, Image} from 'react-native';
import styles from './Detail.styles';
import useFetch from "../../hooks/useFetch";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import Config from '../../../config';

const Detail = ({route}) => {
    const {id} = route.params;
    const {loading, error, data} = useFetch(`${Config.API_URL}/${id}`);

    if(loading){
        <Loading/>
    }

    if(error){
        <Error/>
    }

    return(
        <View style={styles.container}>
            <Image source={{ uri:data.image }} style={styles.image}/>
            <View style={styles.body_container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
                <Text style={styles.price}>{data.price} TL</Text>
            </View>
        </View>
    );
}

export default Detail;
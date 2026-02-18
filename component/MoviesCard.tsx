import { Text, TouchableOpacity,Image, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { icons } from '@/constants/icons';

const MoviesCard = ({id,poster_path,title,vote_average,release_date}:Movie) => {
  return (
    <Link
     href={`/movies/${id}`} 
     asChild>
        <TouchableOpacity  className='flex-1 mx-1' >
            <Image source={{uri:poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placehold.co/600*400/1a1a1a/ffffff.png'}} className='w-full h-52 rounded-lg' resizeMode='cover'/>
            <Text className='text-white text-sm font-bold mt-2' numberOfLines={1}>{title}</Text>
            <View className='flex-row items-center justify-start gap-x-1'>
                <Image source={icons.star} className='size-4' />
                <Text className="text-xs text-white font-bold uppercase">{Math.round(vote_average/2)}</Text>
            </View>
            <View className='flex-row items-center justify-between'>
                <Text className='text-xs text-light-300 font-medium mt-1'>{release_date?.split("-")[0]}</Text>
                {/* <Text className='text-xs -font-medium text-light-300 uppercase'>Movie</Text> */}

            </View>
        </TouchableOpacity>
    </Link>
  )
}

export default MoviesCard;
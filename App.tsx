import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import fetchData from "./src/api/data"
import ClockDisplay from './src/components/ClockDisplay';
import MainBackground from './src/styled/MainBackground';
import SearchContainer from './src/styled/SearchContainer'
import Button from './src/styled/Button'

import { LinearGradient } from 'expo-linear-gradient';
import ErrorBoundary from './src/components/ErrorBoundary';
import Input from './src/styled/Input';


export default function App() {

  const [ locationInput, setLocationInput ] = useState('')
  const [ results, setResults ] = useState(null) 
  const textInputRef = useRef(null)


  const getData = () => {
    if(results === null){
      fetchData(locationInput).then(res => setResults(res)).catch(err => setResults(null))
    } else {
      setLocationInput('')
      textInputRef.current.clear()
      setResults(null)
    }
  }

  const whichColors = () => {
    if(results === null){
      return ['rgba(209, 232, 255, 1)', 'rgba(124, 222, 255, 0.3)', 'rgba(121, 174, 244, 0.05)' ]
    } else {
      return ['rgba(255, 247, 201, 1)', 'rgba(255, 176, 124, 1)', 'rgba(244, 121, 121, 1)']
    }
  }


  return (
    <ErrorBoundary>
    <MainBackground style={{backgroundColor: results ? '#FA957B': '#79B0F4'}}>
      <LinearGradient 
        colors={whichColors()} 
        locations={[0.37, 0.72, 1]}
        style={{height: 1000, padding: 30}}
      >
      <SearchContainer>
      <Text style={{fontWeight: 'bold', fontSize: 25, color: results ? '#FA957B': '#79B0F4'}}>When's Golden hour?</Text>

        <Input 
          returnKeyType={'search'} 
          textContentType={"location"}
          placeholder={"Where are you?"} 
          onChangeText={location => setLocationInput(location)} 
          onSubmitEditing={getData}
          autoFocus={true}
          ref={textInputRef}
          style={{color: results ? '#c70a83' : '#27228a'}}
        />
        
        <Button 
          results={results}
          disabled={!locationInput}
          onPress={getData}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>{results ? 'CLEAR' : 'SEARCH'}</Text>
        </Button>

      </SearchContainer>
      <View>
        {results && <ClockDisplay data={results}/>}
      </View>
      </LinearGradient>
    </MainBackground>
    </ErrorBoundary>
  );
}

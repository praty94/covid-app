import React from 'react';
import {Cards,Charts,CountryPicker,Wrapper} from './Components';
import styles from './App.module.css';
class App extends React.Component{
render(){
  return (
    <Wrapper className={styles.container}>
      <Cards></Cards>
      <Charts></Charts>
      <CountryPicker></CountryPicker>
    </Wrapper>
  );
}
}

export default App;

import  React from 'react';
import HomeScreen from './screen/HomeScreen'
import Header from './component/Header'
import NavigationLeft from './component/NavigationLeft'
function App() {
  return (
    <>
      <NavigationLeft/>

      <div class="grid-container">
        <Header/>

        <main>
          <HomeScreen/>
        </main>

        <footer class="row">&#169; 2020 All rights reserved.</footer>

      </div>
    </>
  );
}

export default App;

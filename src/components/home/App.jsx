import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import debounce from 'lodash-es/debounce';
import styles from './App.module.css';

import Footer from './footer';
import NavBar from './navbar';
import Search from './search';
import ForecastCard from './ForecastCard';
import WeatherCard from './weather-card';
import UnitsToggle from './units-toggle';

const searchTimeoutInMs = 500;

const App = () => {
  const [location, setLocation] = useState('Berlin');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [units, setUnits] = useState('metric');

  const debounceSearch = useMemo(
    () =>
      debounce((searchTerm) => {
        setDebouncedSearchTerm(searchTerm);
      }, searchTimeoutInMs),
    [],
  );

  const handleLocationChange = (event) => {
    const query = event.target.value.trim();
    if (query) {
      setIsSearching(true);
    }
    debounceSearch(query);
  };

  const handleUnitsChange = (newUnits) => {
    setUnits(newUnits);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      setLocation(debouncedSearchTerm);
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className={styles.app}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <main>
              <div className={styles.search}>
                <Search
                  location={location}
                  isSearching={isSearching}
                  onLocationChange={handleLocationChange}
                />
                <div className={styles.weather_wrapper}>
                  <WeatherCard location={location} units={units} />
                  <ForecastCard location={location} units={units} />
                </div>
                <UnitsToggle units={units} onUnitsChange={handleUnitsChange} />
                <Footer />
              </div>
            </main>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
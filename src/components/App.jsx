import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import debounce from 'lodash-es/debounce';
// Custom Components
import { Footer, Navbar, Search, ForecastCard, WeatherCard, UnitsToggle } from './';

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
    <div className="dark:bg-black min-h-screen">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <main>
              <div className="mx-auto w-5/6 md:w-full 2xl:max-w-7xl xl:max-w-6xl">
                <Search
                  location={location}
                  isSearching={isSearching}
                  onLocationChange={handleLocationChange}
                />
                <div className="shadow-lg rounded-lg h-auto overflow-hidden w-full md:w-3/5 lg:w-1/2 m-auto mt-4 divide-y-2 divide-light-blue-400">
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
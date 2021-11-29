import React from 'react';
//Middleware
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
//SWR hook
import { useWeather } from '../hooks/useWeather';
//Custom Component
import { Loader } from '../components';

import styles from './ForecastCard.module.css';

const ForecastCard = ({ location, units }) => {
  const { forecast, isLoading, isError } = useWeather(
    'forecast',
    location,
    units,
  );

  if (isLoading || isError) return <Loader />;
  
  return (
    <>
      <div className={styles.main_wrapper}>
        <div>
          {forecast.map((item, index) => (
              <ul className={styles.list} key={index}>
                <li className={styles.list_item}>
                  <span className={styles.day}>
                    {dayjs(item.dt_txt).format('dddd')}
                  </span>
                  <span className={styles.icon}>
                    <span className={item.forecastIcon}></span>
                  </span>
                  <span className={styles.temperature}>
                    {item.min}&deg; / {item.max}&deg;
                  </span>
                </li>
              </ul>
          ))}
        </div>
      </div>
    </>
  );
};

Forecast.propTypes = {
  forecast: PropTypes.array,
};

export default ForecastCard;

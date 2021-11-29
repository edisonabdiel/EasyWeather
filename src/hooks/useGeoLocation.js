import { useEffect, useState } from "react";

const useGeoLocation = () => {
  const [coordinates, setCoordinates] = useState([]);
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const fetchCurrentLocation = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lng}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response?.json();
      console.log(data);
      setCurrentLocation(data?.name);
    };
    fetchCurrentLocation();
  }, [coordinates]);

  return currentLocation;
};

export default useGeoLocation;

export const getRails = rails => {
  return fetch(rails)
    .then(res => res.json())
    .then(rails => {
      const railData = rails.results.map(rail => {
        const { line, name, schedule } = rail;
        return getSchedule(schedule)
          .then(railStops => ({ line, name, railStops }))
      });
      return Promise.all(railData);
    })
}

const getSchedule = schedule => {
  return fetch(schedule)
    .then(res => res.json())
    .then(stops => stops.stops)
}

export const getBuses = buses => {
  return fetch(buses)
    .then(res => res.json())
    .then(buses => {
      const busData = buses.results.map(bus => {
        const { route, name, schedule } = bus;
        return getSchedule(schedule)
          .then(busStops => ({ route, name, busStops }))
      });
      return Promise.all(busData);
    });
}

export const getSkyRides = skyRides => {
  return fetch(skyRides)
    .then(res => res.json())
    .then(skyRides => {
      const skyRideData = skyRides.results.map(skyride => {
        const { route, name, schedule } = skyride;
        return getSchedule(schedule)
          .then(skyRideStops => ({ route, name, skyRideStops }))
      });
      return Promise.all(skyRideData);
    });
}
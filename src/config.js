const api = {
  streets: () => 'https://dispex.org/api/vtest/Request/streets',
  building: (id) => `https://dispex.org/api/vtest/Request/houses/${id}`,
  flat: (id) => `https://dispex.org/api/vtest/Request/house_flats/${id}`
}

export {api}
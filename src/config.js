const api = {
  streets: () => 'https://dispex.org/api/vtest/Request/streets',
  building: (id) => `https://dispex.org/api/vtest/Request/houses/${id}`,
  flat: (id) => `https://dispex.org/api/vtest/Request/house_flats/${id}`,
  getClients: (addressId) => `https://dispex.org/api/vtest/HousingStock/clients?addressId=${addressId}`,
  addClient: () => `https://dispex.org/api/vtest/HousingStock/client`,
  putClient: () => `https://dispex.org/api/vtest/HousingStock/bind_client`,
  deleteClient: (id) => `https://dispex.org/api/vtest/HousingStock/bind_client/${id}`,
}

export {api}
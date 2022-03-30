import { defineStore } from 'pinia'
import { http } from '../axios'
import { Driver, DriversCollection } from '../models/drivers.model'


interface storeState
{
    driverCollection: DriversCollection
}


export const useDrivers = defineStore('Driver', {
    state: (): storeState => ({
        driverCollection: new DriversCollection([]),
    }),

    getters: {
        drivers: (state) => state.driverCollection.drivers,

        driverById: (state) =>
        {
            return (driverId: string) => state.driverCollection.drivers.find((item) => item._id === driverId)
        },

    },

    actions: {
        async addDriver(payload: Driver)
        {
            const response = await http.post(`/drivers`, payload)
            return response
        },

        async getDrivers()
        {
            const response = await http.get(`/drivers`)
            this.driverCollection.drivers = [...response.data.data]
        },

        async getDriverById(driverId: number)
        {
            return await http.get(`/drivers/${driverId}`)
        },

        async updateDriverById(driverId: string, payload: Driver)
        {
            return await http.patch(`/drivers/${driverId}`, payload)
        },

        async deleteDriverById(driverId: string | undefined)
        {
            const response = await http.delete(`/drivers/${driverId}`)
            if (response) this.getDrivers()
        }
    }


})
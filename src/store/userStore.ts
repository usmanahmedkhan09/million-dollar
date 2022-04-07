import { defineStore } from 'pinia'
import { http } from '../axios'
import { User } from '../models/user.model'

export const useUsers = defineStore('User', {

    actions: {
        async registerUser(payload: User)
        {
            return await http.post(`/users`, payload)
        },

        async loginUser(payload: User)
        {
            return await http.post(`/users/login`, payload)
        }
    }


})
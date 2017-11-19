import axios from 'axios';

export class SectionServices {

    getOurServices(params) {
       return axios.get('../mocks/servicios.json')
            .then(res => {
                return res.data
            })
    }
}
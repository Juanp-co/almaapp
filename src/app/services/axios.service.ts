import { Injectable } from '@angular/core';
import Axios from 'axios';
import {StorageService} from './storage.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  axios: any = null;

  constructor(private storageService: StorageService) {
    this.axios = Axios.create({
      baseURL: environment.urlApi,
      withCredentials: false,
      maxContentLength: 100000000,
      maxBodyLength: 1000000000
    });
    this.setToken();
  }

  static getErrorCatch(error: any) {
    const ret = {
      error: 'Error desconocido.',
      status: null,
      extraData: null
    };

    if (error) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      if (error.response) {
        if (error.response.status) ret.status = error.response.status;

        if (error.response.data) {
          const { data } = error.response;

          if (ret.status === 401)
            ret.error = data.msg ? data.msg : error.toString();
          else if (data.errors && data.errors.length > 0)
            ret.error = data.errors[0].msg || 'No se logró determinar el problema.';
          else
            ret.error = data.msg ? data.msg : error.toString();

          ret.extraData = data; // if exist other data assignate;
          delete ret.extraData.msg;
        }
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        // console.log('Error msg', error.message);
        ret.error = error.toString();
      } else {
        // Something happened in setting up the request and triggered an Error
        // console.log('Error msg', error.message);
        ret.error = error.toString();
      }
    }

    return ret;
  }

  async setToken() {
    if (this.axios) {
      const token: string = await this.storageService.get('token');
      if (token) {
        this.axios.defaults.headers.common['x-access-token'] = token;
      }
      else {
        await this.storageService.remove('data');
        await this.storageService.remove('token');
        delete this.axios.defaults.headers.common['x-access-token'];
      }
    }
  }

  async getData(endpoint: string, data: any = {}) {
    try {
      await this.setToken();
      const res = await this.axios.get(endpoint, { params: data });
      return { success: true, data: res.data };
    }
    catch (e: any) { return AxiosService.getErrorCatch(e); }
  }

  async postData(endpoint: string, data: any = {}) {
    try {
      await this.setToken();
      const res = await this.axios.post(endpoint, data);
      return { success: true, data: res.data };
    }
    catch (e: any) { return AxiosService.getErrorCatch(e); }
  }

  async putData(endpoint: string, data: any = {}) {
    try{
      await this.setToken();
      const res = await this.axios.put(endpoint, data);
      return { success: true, data: res.data };
    }
    catch (e: any) { return AxiosService.getErrorCatch(e); }
  }

  async deleteData(endpoint: string) {
    try {
      await this.setToken();
      const res = await this.axios.delete(endpoint);
      return { success: true, data: res.data };
    }
    catch (e: any) { return AxiosService.getErrorCatch(e); }
  }

}

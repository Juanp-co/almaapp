import { Injectable } from '@angular/core';
import * as cookie from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() { }

  getCookie(key: string) {
    return cookie.get(key) || null;
  }

  removeCookie(key: string) {
    cookie.remove(key, { expires: 1 });
  }

  setCookie(key: string, value: any) {
    cookie.set(key, value, {
      expires: 1,
      path: '/'
    });
  }
}
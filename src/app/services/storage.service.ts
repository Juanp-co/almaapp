import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private localStorage: Storage | null = null;

  constructor(
    private storage: Storage
  ) {
    this.init();
  }

  async init() {
    this.localStorage = await this.storage.create();
  }

  async get(key: string) {
    const data = await this.localStorage?.get(key);
    return data || null;
  }

  async remove(key: string) {
    await this.localStorage?.remove(key);
  }

  async set(key: string, value: any) {
    await this.localStorage?.set(key, value);
  }
}

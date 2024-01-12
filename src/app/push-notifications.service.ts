import {Injectable} from '@angular/core';
import {Token} from "./user";
import {environment} from "../environments/environment";
import io from 'socket.io-client';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PushNotificationsService {

  private socket = io(environment.apiUrl);

  connect(): void {
    this.socket.connect();
  }

  disconnect(): void {
    this.socket.disconnect();
  }

  login(token: Token): void {
    this.socket.emit('client-login', token.token);
  }

  eventObservable(event: string): Observable<{ message: String }> {
    return new Observable<{ message: String }>(observer => {
      this.socket.on(event, (data) => {
        observer.next(data)
      })
    })
  }
}

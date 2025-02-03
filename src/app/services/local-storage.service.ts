import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storageKey = 'userCredentials';

  constructor() {}

  /** Save a new user credential */
  addUser(email: string, password: string, name : string): boolean {
    let users = this.getUsers();
  
    // Check if the email already exists
    if (users.some(user => user.email === email)) {
      console.warn('Email already exists:', email);
      return false; // Return false to indicate the email already exists
    }
  
    // Add the new user
    users.push({ email, password, name });
    localStorage.setItem(this.storageKey, JSON.stringify(users));
    return true; // Return true to indicate success
  }

  /** Get all stored user credentials */
  getUsers(): { email: string, password: string, name: string }[] {
    const users = localStorage.getItem(this.storageKey);
    return users ? JSON.parse(users) : [];
  }

  validateUser(email: string, password: string): boolean {
    let users = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    return users.some((user: any) => user.email === email && user.password === password);
  }

  /** Clear all stored users (if needed) */
  clearUsers(): void {
    localStorage.removeItem(this.storageKey);
  }

  setLoggedUser(email: string, password: string, name: string): void {
    const loggedUser = { email, password, name };
    localStorage.setItem('loggedInUser', JSON.stringify(loggedUser));
  }

  getUserByEmail(email: string): any {
    let users = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    return users.find((user: any) => user.email === email);
  }
  
}

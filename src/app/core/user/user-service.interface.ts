export interface UserService {
  setUser(id: number): void;
  getUser(id: number): string;
  getCurrentUser(): number;
}

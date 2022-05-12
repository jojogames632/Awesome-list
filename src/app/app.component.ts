import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { UsersService } from './core/services/users.service';

@Component({
  selector: 'al-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private usersService: UsersService, private authService: AuthService) {}

  ngOnInit() {
    this.tryAutoLogin();
  }

  private tryAutoLogin() {
    const token = localStorage.getItem('token');
    if (!token) { return; }

    const expirationDate = +localStorage.getItem('expirationDate')!;
    const now = new Date().getTime();
    if (now >= expirationDate) { return; }

    const userId: string = localStorage.getItem('userId')!;
    this.usersService.get(userId, token).subscribe(user => {
      if (!user) {
        return;
      }
      this.authService.autoLogin(user);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Observable} from 'rxjs';
import {User} from '../../auth/user.model';


@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  userProfile$: Observable<User>;
  balance$ :Observable<Number>;

  constructor(public authService: AuthService) {
    this.userProfile$ = new Observable<User>();
    this.balance$ = new Observable<Number>();
  }

  ngOnInit(): void {
    this.userProfile$ = this.authService.userProfile$;
    this.balance$ = this.authService.balance$;
  }

  getDate() {
    return new Date().toDateString();
  }

}

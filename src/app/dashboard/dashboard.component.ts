
import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(readonly authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.userProfile$.subscribe(data => {
      console.log(data)
    })
  }
}



import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import firebase from 'firebase/app';
import {User} from '../auth/user.model';
import {Router} from '@angular/router';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() user: User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }
}


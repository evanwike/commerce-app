
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import firebase from 'firebase/app';
import {User} from '../auth/user.model';
import {Router} from '@angular/router';
import {take} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }


}


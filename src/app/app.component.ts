import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'front';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.checkAuth();
  }
}

import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AuthService } from '@app/services';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  constructor(public authService: AuthService) {}
}

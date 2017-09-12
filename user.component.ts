import {Component} from '@angular/core';
@Component({
  selector: `my-user`,
  templateUrl: `app/user/user.component`,
  styleUrls:[`app/user/user.component`]
})

export class UserComponent {
  firstName: string =  'susmitha';
  lastName: string = 'srungavarapu';
  gender:string = 'female';
  age: number = 24;
}

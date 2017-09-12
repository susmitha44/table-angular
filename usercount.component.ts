import {Component,Input} from "@angular/core";

@Component({
  selector:`user-count`,
  templateUrl:`app/user/usercount.component.html`,
  styleUrls: [`app/user/usercount.component.css`]
})
export class usercountComponent{

  @Input()
  all: number ;

  @Input()
  one: number ;
}


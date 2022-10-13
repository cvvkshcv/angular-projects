import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HelloServiceService } from 'src/app/services/hello-service.service';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() name = "";
  @Input() id = "";

  @ViewChild('myinput') myinput: any; 

  data: any = null;

  loading = false;

  authSubs: any = null;

  constructor(private helloService: HelloServiceService, private authService: AuthService) { }

  ngOnInit(): void {
    console.log('Init');
    // this.authSubs = this.authService.notifyLogin$.subscribe(data => {});
    console.log(this.myinput);
  }
  
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    const id = changes['id'].currentValue;
    if (id !== '') {
      this.loading = true;
      this.helloService.getPhotos(id).subscribe(data => {
        this.data = data;
        this.loading = false;
      });
    }
    console.log('Chagnes');
  }

  // ngAfterViewInit() {
  //   // template
  //   // View
  //   console.log('Dom is ready');
  //   console.log(this.myinput.nativeElement);
  //   this.myinput.nativeElement.value = 'My new value'
  // }


  showInput(input: HTMLInputElement) {
    console.log(input);   
    console.log(this.myinput.nativeElement); 
  }

  ngOnDestroy() {
    console.log('Destroying the component');
    if (this.authSubs) {
      this.authSubs.unsubscribe();
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationServiceService } from '../_services/authentication-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent   {
  id: any;

  produit:any[] = [];
  constructor(private route: ActivatedRoute,public authenticationService : AuthenticationServiceService) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("DetailComponent",id);
    this.authenticationService.getDetailarticle(id).subscribe((data: any) => {

      console.log("data getDetailarticle",data[0]);
      this.produit.push(data[0]);
      console.log("data getDetailarticle produit",this.produit);

    }
    );
   }


}

import { Component, OnInit } from '@angular/core';
import { CatelogueService } from './service/catelogue/catelogue.service';
import { environment } from 'src/environments/environment'; // Importez l'environnement par défaut


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories: any;
  title: any;

  constructor(private catService: CatelogueService){
    
   console.log('appiiiiiiiiiii urlllll');
   const branch = import.meta.env['API_UR']; // Recommended
   const commit = process.env['API_URL']; // Deprecated

   console.log(branch);
   console.log(commit);


  }

  ngOnInit(): void {

    console.log("bassssssssssseeeeeeeeeeee");
    console.log('appiiiiiiiiiii urlllll');
    const branch = import.meta.env['API_UR']; // Recommended
    const commit = process.env['API_URL']; // Deprecated
    console.log(branch);
   console.log(commit);
}

  
  
  

}

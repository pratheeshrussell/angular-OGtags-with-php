import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-link',
  templateUrl: './image-link.component.html',
  styleUrls: ['./image-link.component.css']
})
export class ImageLinkComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  imgLink="";
  imgTitle="";
  imgDesc="";
  ngOnInit(): void {
    const imgData = JSON.parse(window.atob( 
      decodeURIComponent(this.route.snapshot.queryParams["ogdata"])));
    this.imgLink = imgData['imgurl'];
    this.imgTitle = imgData['title'];
    this.imgDesc = imgData['description'];
  }

}

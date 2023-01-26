import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/constants/settings.app';
import { FetchimageService } from 'src/app/services/fetchimage.service';

@Component({
  selector: 'app-image-generator',
  templateUrl: './image-generator.component.html',
  styleUrls: ['./image-generator.component.css']
})
export class ImageGeneratorComponent implements OnInit {

  constructor(private fetchImage:FetchimageService) { }
  generateButton = {
    visible:true,
    enabled:true
  };
  imgLink="";
  shareLink = "";


  ngOnInit(): void {
  }

  handleGenerate(){
    this.generateButton.enabled = false;
    this.fetchImage.fetchRandomImage().subscribe((response:any) =>{
      const user = response["user"];
      // Probably you won't send the entire data as a GET param
      // rather fetch values from DB
      const shareData = encodeURIComponent(window.btoa(JSON.stringify({
        id:response['id'],
        imgurl:response['urls']['regular'],
        title:user? 'Image by ' + user['first_name']:'Image from unsplash',
        description:response['alt_description'],
      })));

      this.imgLink = response['urls']['regular'];
      this.shareLink = (AppSettings.shareBaseUrl +"?ogdata="+shareData).trim();
      this.generateButton.visible = false;
    });
  }

}

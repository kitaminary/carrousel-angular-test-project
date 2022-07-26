import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { IFileImage } from 'ngx-drop-file-image';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.scss'],
})
export class ImageBoxComponent implements OnInit {
  @Input() index: number
  @Input() images: (string | IFileImage | SafeResourceUrl)[]
  public animationSizeImg: number = 600;
  public translate: string = 'translateX';
  public currentPhoto: string;
  public animationTypes: string = 'ease'

  animation(event: any) {

    if (event.value === 'translateX') {
      this.animationSizeImg = 600;
      this.translate = 'translateX'
    }

    if (event.value === 'translateY') {
      this.animationSizeImg = 350;
      this.translate = 'translateY'
    }
  }

  animationType(event: any) {
    if (event.value === 'ease') {
      this.animationTypes = 'ease'
    }
    if (event.value === 'linear') {
      this.animationTypes = 'linear'
    }
    if (event.value === 'ease-in') {
      this.animationTypes = 'ease-in'
    }
    if (event.value === 'ease-out') {
      this.animationTypes = 'ease-out'
    }
    if (event.value === 'ease-in-out') {
      this.animationTypes = 'ease-in-out'
    }
    if (event.value === 'cubic-bezier(.1, -1.5, .1, 2.5)') {
      this.animationTypes = 'cubic-bezier(.1, -1.5, .1, 2.5)'
    }
    if (event.value === 'steps(4, start)') {
      this.animationTypes = 'steps(4, start)'
    }

    console.log(this.animationTypes);
  }

  ngOnInit(): void {
  }

}

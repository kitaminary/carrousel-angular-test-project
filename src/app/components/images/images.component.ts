import { Component, Input, } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { IFileImage } from 'ngx-drop-file-image';
import { Animations } from './images.animations';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
  animations: [Animations]
})

export class ImagesComponent {
  @Input() index: number;
  @Input() images: (string | IFileImage | SafeResourceUrl)[];
  @Input() currentPhoto: string;
  @Input() animationSizeImg: number;
  @Input() translate: string;
  @Input() animationTypes: string

}

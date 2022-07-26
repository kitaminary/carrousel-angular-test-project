import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormControl, FormGroup } from '@angular/forms';
import { IFileImage } from 'ngx-drop-file-image';

@Component({
  selector: 'app-carousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent {
  public index: number = 0;
  public images: (string | IFileImage | SafeResourceUrl)[] = ['https://kluchimasterstva.ru/wp-content/uploads/pyat-zakonov-izobiliya-011.jpg',
    'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg'];
  public myForm: FormGroup = new FormGroup({
    newImage: new FormControl(),
  })
  public counter = 0;
  public undef = undefined;
  public newImage: undefined | string;
  public nameFile = 'No image selected';
  constructor(private sanitizer: DomSanitizer) {

  }

  getImages(image: IFileImage[] | undefined) {
    if (image !== undefined) {
      this.newImage = image[this.counter].urlImage;
      this.counter += 1;
    }
  }

  currentNameFile(event: any) {
    if (event === null) {
      this.nameFile = 'No image selected'
    } else {
      this.nameFile = event.target.value.slice(12, event.target.value.length)
    }
  }

  change(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.newImage = reader.result as string;
        this.myForm.patchValue({
          fileSource: reader.result
        });
      };
    }
    event.preventDefault()
  }

  isAdvancedUpload() {
    var div = document.createElement('div');
    return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
  }


  submitForm() {
    if (this.newImage !== undefined) {
      this.images = [...this.images, this.sanitizer.bypassSecurityTrustResourceUrl(this.newImage)]
      console.log(this.images)
    }

    console.log(this.images);
    this.newImage = undefined
    this.nameFile = 'No image selected'
    this.myForm.reset();
  }
}

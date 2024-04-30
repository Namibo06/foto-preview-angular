import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {
  selectedFiles: File[] = [];
  previewUrls: (string | ArrayBuffer)[] = [];

  onFileSelected(event: any): void {
    const fileList: FileList = event.target.files;
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      this.selectedFiles.push(file);
      this.preview(file);
    }
  }

  preview(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result !== null) {
        this.previewUrls.push(reader.result);
      }
    };
  }

  removePhoto(index: number): void {
    this.selectedFiles.splice(index, 1);
    this.previewUrls.splice(index, 1);
  }

  replacePhoto(index: number, event:any): void {
    const fileList: FileList = event.target.files;
    this.selectedFiles[index] = fileList[0];
    this.previewUrls[index] = "";
    this.preview(fileList[0]);
  }

  uploadPhoto(): void {
    console.log(this.selectedFiles);
  }
}

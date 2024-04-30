import { Component } from '@angular/core';

@Component({
  selector: 'app-photos2',
  templateUrl: './photos2.component.html',
  styleUrl: './photos2.component.css'
})
export class Photos2Component {
  photos: File[] = [];
  previewUrls: (string | ArrayBuffer)[] = [];
  replaceIndex: number | null = null; // Propriedade para armazenar o índice da foto que será substituída

  onFileSelected(event: any, index: number | null = null): void {
    const fileList: FileList = event.target.files;

    // Verificar se há um índice válido fornecido
    if (index !== null && index >= 0 && index < this.photos.length) {
        const file = fileList[0]; // Obter apenas o primeiro arquivo selecionado
        this.photos[index] = file; // Substituir a foto no índice fornecido
        this.preview(file, index); // Atualizar a visualização da foto
    } else {
        // Adicionar novas fotos
        for (let i = 0; i < fileList.length; i++) {
            const file = fileList[i];
            this.photos.push(file);
            this.preview(file, this.photos.length - 1);
        }
    }
  }

  preview(file: File, index: number): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        if (reader.result !== null) {
            // Verifica se já existe uma URL na posição index
            if (this.previewUrls[index] !== undefined) {
                this.previewUrls[index] = reader.result; // Atualiza a URL existente
            } else {
                this.previewUrls.push(reader.result); // Adiciona a URL ao final da lista
            }
        }
    };
  }

  removePhoto(index: number): void {
    this.photos.splice(index, 1);
    this.previewUrls.splice(index, 1);
  }

  replacePhoto(event: any): void {
    if (this.replaceIndex !== null && this.replaceIndex >= 0 && this.replaceIndex < this.photos.length) { // Verificar se há um índice válido para substituição
      console.log("Index da foto: " + this.replaceIndex);
      const fileList: FileList = event.target.files;
      if (fileList.length > 0) {
        const newFile = fileList[0];

        // Substituir a foto no índice especificado
        this.photos[this.replaceIndex] = newFile;
        this.previewUrls[this.replaceIndex] = ""; // Limpar a URL antiga
        this.preview(newFile, this.replaceIndex); // Chamar o método preview com o índice para atualizar a imagem correspondente na lista de previewUrls
      }
    }
    this.replaceIndex = null; // Redefinir o valor de replaceIndex após a substituição
  }

  handleReplacePhoto(event: any, index: number): void {
    this.replaceIndex = index; // Definir o índice da foto a ser substituída
    this.replacePhoto(event); // Chamar o método para substituir a foto
  }

  addInput(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change', this.onFileSelected.bind(this));
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nomeAluno = '';
  alunos: string[] = [];

  cadastrarAluno(): void {
    const nome = this.nomeAluno.trim();

    if (!nome) {
      return;
    }

    this.alunos.push(nome);
    this.nomeAluno = '';
  }

  excluirAluno(index: number): void {
    this.alunos.splice(index, 1);
  }
}
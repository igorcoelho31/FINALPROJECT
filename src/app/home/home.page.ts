import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { profissao } from '../model/profissao.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pageTitle: string = 'Home';

minhasProfissoes: profissao[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void{
  
    this.http.get<profissao[]>('http://localhost:3000/profissao').subscribe(caixinha => this.minhasProfissoes = caixinha );
  }

}

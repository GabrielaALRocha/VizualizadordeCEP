import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BuscarcepService } from './buscarcep.service';
import { Cep } from './models/cep';

@Component({
  selector: 'app-paginaprincipal',
  templateUrl: './paginaprincipal.component.html',
  styleUrls: ['./paginaprincipal.component.sass']
})
export class PaginaprincipalComponent implements OnInit {

  cep!: Cep



  constructor(
    private buscarcepService: BuscarcepService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  buscarCep(cep: string) {
     this.buscarcepService.buscarCEP(cep).subscribe(
      (dados) => {
        this.cep = dados
      })

      }
    
  }
   
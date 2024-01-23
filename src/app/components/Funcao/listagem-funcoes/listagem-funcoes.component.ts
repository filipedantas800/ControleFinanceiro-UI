import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { FuncoesService } from './../../../services/funcoes.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-listagem-funcoes',
  templateUrl: './listagem-funcoes.component.html',
  styleUrls: ['./listagem-funcoes.component.css']
})
export class ListagemFuncoesComponent implements OnInit {

  funcoes = new MatTableDataSource<any>();
  displayedColumns!: string[];
  autocompleteInput = new FormControl();
  opcoesFuncoes: string[] = [];
  nomesFuncoes!: Observable<string[]>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor(
    private funcoesService: FuncoesService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.funcoesService.PegarTodos().subscribe(resultado => {
      resultado.forEach((funcao) => {
        this.opcoesFuncoes.push(funcao.name);
      });

      this.funcoes.data = resultado;
      this.funcoes.sort = this.sort;
      this.funcoes.paginator = this.paginator;
    });

    this.displayedColumns = this.ExibirColunas();

  }

  ExibirColunas(): string[] {
    return ['nome', 'descricao', 'acoes'];
  }
}

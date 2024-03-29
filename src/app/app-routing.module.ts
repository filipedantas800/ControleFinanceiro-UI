import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemCategoriasComponent } from './components/Categoria/listagem-categorias/listagem-categorias.component';
import { NovaCategoriaComponent } from './components/Categoria/nova-categoria/nova-categoria.component';
import { AtualizarCategoriaComponent } from './components/Categoria/atualizar-categoria/atualizar-categoria.component';
import { ListagemFuncoesComponent } from './components/Funcao/listagem-funcoes/listagem-funcoes.component';
import { NovaFuncaoComponent } from './components/Funcao/nova-funcao/nova-funcao.component';
import { AtualizarFuncaoComponent } from './components/Funcao/atualizar-funcao/atualizar-funcao.component';
import { RegistrarUsuarioComponent } from './components/Usuario/Registro/registrar-usuario/registrar-usuario.component';


const routes: Routes = [
  {
    path: 'categorias/listagemcategorias', component: ListagemCategoriasComponent
  },
  {
    path: 'categorias/novacategoria', component: NovaCategoriaComponent
  },
  {
    path: 'categorias/atualizarcategoria/:id', component: AtualizarCategoriaComponent
  },
  {
    path: 'funcoes/listagemfuncoes', component: ListagemFuncoesComponent
  },
  {
    path: 'funcoes/novafuncao', component: NovaFuncaoComponent
  },
  {
    path: 'funcoes/atualizarfuncao/:id', component: AtualizarFuncaoComponent
  },
  {
    path: 'usuarios/registrarusuario', component: RegistrarUsuarioComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { first } from 'rxjs/operators';
import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-add',
  templateUrl: './produto-add.component.html',
  styles: [
  ]
})
export class ProdutoAddComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private service: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      //Aqui realizamos as validações dos campos obrigtórios.
      Codigo: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(6)]],
      Descricao: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]]
    })
  }

  //Aplica formatação css no campo inválido
  AplicaCssErro(campo: string) {
    return { 'is-invalid': this.VerificaValidTouched(campo) }
  }

  //Valida se o campo foi tocado
  VerificaValidTouched(campo: string) {
    return !this.formulario.controls[campo]?.valid && this.formulario.controls[campo].touched;
  }

  //Limpa o form
  Resetar() {
    this.formulario.reset();
  }

  Salvar() {
    this.service.Inserir(this.formulario.value)
      .pipe(first())
      .subscribe(
        (x) => {
          this.router.navigate(["produto/lista"]);
        }
      );

  }

}

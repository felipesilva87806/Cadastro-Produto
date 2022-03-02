import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-add',
  templateUrl: './produto-add.component.html',
  styles: [
  ]
})
export class ProdutoAddComponent implements OnInit {

  bloquearPedido: boolean = false;
  formulario: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      Codigo: [null,[Validators.required, Validators.maxLength(18)]],
      Descricao: [null, [Validators.required, Validators.maxLength(50)]]
    })
  }

  AplicaCssErro(campo: string) {
    return { 'is-invalid': this.VerificaValidTouched(campo) }
  }

  VerificaValidTouched(campo: string) {
    return !this.formulario.controls[campo]?.valid && this.formulario.controls[campo].touched;
  }  

  Resetar() {
    this.formulario.reset();
  }

}

import {
  Component,
  EventEmitter,
  Output,
  forwardRef,
  HostListener,
  Input,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import {fromEvent} from 'rxjs';

export interface FormularioComponentData {
  idade: number;
  nome: string;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormularioComponent),
      multi: true,
    }
  ],
})
export class FormularioComponent implements ControlValueAccessor {
  @Input() private _disabled: boolean;
  get disabled() { return this._disabled; }
  set disabled(disabled: boolean) {
    this._disabled = disabled;
    if (disabled) {
      this._form.disable();
    } else {
      this._form.enable();
    }
  }

  @Input() readonly = false;

  @Input() nomeVisivel = true;

  /** Emite os dados do formulário */
  @Output()
  value: EventEmitter<FormularioComponentData> =
      new EventEmitter<FormularioComponentData>();

  /** Representa o formulãrio na template */
  _form: FormGroup;

  private _onChange: (obj: FormularioComponentData) => void;

  @HostListener('blur') _onTouched: () => void;

  constructor(_fb: FormBuilder) {
    this._form = _fb.group({
      nome: ['Pedro', Validators.required],
      idade: [null, Validators.required],
    });

    // Observable
    this._form.valueChanges.subscribe((valor) => {
      if (this._onChange) {
        this._onChange(valor);
      }

      if (this._onTouched) {
        this._onTouched();
      }
    });
  }

  /** implementação da ControlValueAccessor */
  writeValue(obj: FormularioComponentData): void { this._form.setValue(obj); }

  /** implementação da ControlValueAccessor */
  registerOnChange(fn: (obj: FormularioComponentData) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void { this._onTouched = fn; }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this._form.disable();
    } else {
      this._form.enable();
    }
  }

  /** Coleta e emite os dados do formulário */
  _emiteDadosDeFormulario() {
    // const dadosForm: FormularioComponentData = {
    //  idade: this._form.value.idade,
    //  nome: this._form.value.nome,
    // };

    if (this._form.invalid) {
      return;
    }

    const dadosForm: FormularioComponentData = {...this._form.value};

    this.value.emit(dadosForm);

    this._form.get('nome').setValue('aleluia');
  }
}

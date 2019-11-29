import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  HostListener,
  OnDestroy,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

import {
  UsuarioFormComponentData,
  UsuarioFormComponentService,
} from './usuario-form-component.service';
import {ThrowStmt} from '@angular/compiler';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UsuarioFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UsuarioFormComponent),
      multi: true,
    },
  ],
})
export class UsuarioFormComponent
  implements ControlValueAccessor, OnDestroy, Validator {
  _form: FormGroup;

  originalUser: UsuarioFormComponentData;

  /**
   * Keep a reference to the "OnChanged" function provided by angular
   * (ControlValueAccessor)
   */
  private _onChange: (data: UsuarioFormComponentData) => void;

  /**
   * Keep a reference for the 'OnTouched' function provided by angular
   * (ControlValueAccessor)
   */
  @HostListener('focusout') _onTouched: () => void;

  /** Teardown observables subscriptions */
  private _destroy$: Subject<void> = new Subject<void>();

  constructor(
    private _componentService: UsuarioFormComponentService,
    private _fb: FormBuilder,
  ) {
    this._form = this._fb.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      ativo: true,
    });

    this._form.valueChanges
      .pipe(takeUntil(this._destroy$))
      .subscribe((value: any) => {
        if (this._onChange) {
          this._onChange(value);
        }
      });
  }

  ngOnDestroy(): void {
    if (this._destroy$ && !this._destroy$.closed) {
      this._destroy$.next();
      this._destroy$.complete();
    }
  }

  /** Implements ControlValueAccessor */
  writeValue(data: UsuarioFormComponentData): void {
    this.originalUser = data;
    if (data) {
      this._form.patchValue({
        nome: data.nome,
        email: data.email,
        ativo: !!data.ativo,
      });
    }
  }

  /** Implements ControlValueAccessor */
  registerOnChange(fn: (data: UsuarioFormComponentData) => void): void {
    this._onChange = fn;
  }

  /** Implements ControlValueAccessor */
  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  /** Implements ControlValueAccessor */
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this._form.disable();
    } else {
      this._form.enable();
    }
  }

  /** Implements Validator */
  validate(control: AbstractControl): ValidationErrors {
    return this._form.valid ? null : {};
  }
}

import { ChangeDetectionStrategy, Component, forwardRef, HostListener, OnDestroy,
} from '@angular/core';
import {
  AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR,
  ValidationErrors, Validator, FormGroup, FormBuilder, Validators,
} from '@angular/forms';

import {
  PessoaFormComponentData,
  PessoaFormComponentService,
} from './pessoa-form-component.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PessoaFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PessoaFormComponent),
      multi: true,
    },
  ],
})
export class PessoaFormComponent
  implements ControlValueAccessor, OnDestroy, Validator {
  _form: FormGroup;

  originalData: PessoaFormComponentData;

  /**
   * Keep a reference to the "OnChanged" function provided by angular
   * (ControlValueAccessor)
   */
  private _onChange: (data: PessoaFormComponentData) => void;

  /**
   * Keep a reference for the 'OnTouched' function provided by angular
   * (ControlValueAccessor)
   */
  @HostListener('focusout') _onTouched: () => void;

  /** Teardown observables subscriptions */
  private _destroy$: Subject<void> = new Subject<void>();

  constructor(
    private _componentService: PessoaFormComponentService,
    private _fb: FormBuilder,
  ) {
    this._form = this._fb.group({
      nome: [null, Validators.required],
      animal: [null, Validators.required],
    });

    this._form.valueChanges
      .pipe(takeUntil(this._destroy$))
      .subscribe((v: any) => {
        if (this._onChange) {
          this._onChange(
            this.originalData ? {...v, id: this.originalData.id} : v,
          );
        }

        if (this._onTouched) {
          this._onTouched();
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
  writeValue(data: PessoaFormComponentData): void {
    this.originalData = data;

    if (data) {
      this._form.patchValue({...data});
    } else {
      this._form.reset();
    }
  }

  /** Implements ControlValueAccessor */
  registerOnChange(fn: (data: PessoaFormComponentData) => void): void {
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

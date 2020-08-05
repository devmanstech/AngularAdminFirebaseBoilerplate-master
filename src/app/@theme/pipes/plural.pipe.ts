import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ngxPlural' })
export class PluralPipe implements PipeTransform {
  transform(input: number, label: string, pluralLabel: string = ''): string {
    // eslint-disable-next-line no-param-reassign
    input = input || 0;
    // eslint-disable-next-line no-nested-ternary
    return input === 1
      ? `${input} ${label}`
      : pluralLabel
      ? `${input} ${pluralLabel}`
      : `${input} ${label}s`;
  }
}

import * as ts from 'typescript';
import { ActionInterfaceProperty } from '../action-interface';

export function getOptionalProperties(
  props: ts.PropertySignature[]
): ActionInterfaceProperty[] {
  return props.filter(prop => prop.questionToken).map(prop => ({
    name: prop.name.getText(),
    required: false,
  }));
}

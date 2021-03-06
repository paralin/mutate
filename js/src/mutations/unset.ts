import { IMutation } from './interface';

export class UnsetMutation implements IMutation {
  public mutationKey = '$unset';

  public apply(oldVal: Object, arg: Object): Object {
    return undefined;
  }
}

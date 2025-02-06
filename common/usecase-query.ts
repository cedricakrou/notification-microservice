import { Command } from './command';
import Any = jasmine.Any;

export interface UseCaseQuery<T extends Command, R extends Any> {
  perform(command: T): R;
}

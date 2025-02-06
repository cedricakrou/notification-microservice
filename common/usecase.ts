import { Command } from './command';

interface UseCase<T extends Command> {
  perform(command: T): void;
}

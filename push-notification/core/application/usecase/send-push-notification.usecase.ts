import { UseCaseQuery } from '../../../../common/usecase-query';

class SendPushNotificationUsecase
  implements UseCaseQuery<SendPushNotificationCommand, boolean>
{
  pushNotificationFacade: PushNotificationFacade;

  constructor(pNf: PushNotificationFacade) {
    this.pushNotificationFacade = pNf;
  }

  perform(command: SendPushNotificationCommand): boolean {


  }
}

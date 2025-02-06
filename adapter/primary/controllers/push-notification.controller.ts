import { Controller, Inject, Post } from '@nestjs/common';

@Controller('push-notification')
class PushNotificationController {
  @Inject()
  pushNotification: PushNotificationFacade;

  @Post()
  public send(payload: SendPushNotificationPayload): boolean {
    const command: SendPushNotificationCommand =
      new SendPushNotificationCommand(payload.from, payload.to, payload.text);

    const useCase: SendPushNotificationUsecase =
      new SendPushNotificationUsecase(this.pushNotification);
    const isSend: boolean = useCase.perform(command);

    return isSend;
  }
}

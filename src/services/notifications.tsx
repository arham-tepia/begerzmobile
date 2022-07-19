import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

class Notifications {
  constructor() {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);

        // process the notification

        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      }
    });

    PushNotification.createChannel(
      {
        channelId: 'begs',
        channelName: 'begDrafts',
        channelDescription: 'Reminder for drafted begs'
      },
      () => {}
    );

    PushNotification.getScheduledLocalNotifications(rn => {
      console.log('SN --- ', rn);
    });
  }

  scheduleDraftNotification(date: any) {
    PushNotification.localNotificationSchedule({
      channelId: 'begs',
      title: 'You have a beg in draft',
      message: 'Head to create and craft the perfect beg!',
      date,
      autoCancel: true
    });
  }
}

export default new Notifications();

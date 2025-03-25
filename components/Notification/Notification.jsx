import { useEffect } from 'react';
import { messaging, getToken, onMessage } from './firebase';
import { toast } from 'react-toastify';

const NotificationComponent = () => {
  useEffect(() => {
    // درخواست مجوز و دریافت توکن
    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          const token = await getToken(messaging, { 
            vapidKey: "BDroVn6KRs9iN1laogFt-J47xc9WsWIfblgIBCi2QllonFT-PAu9up26gRlL-9uL7R1FSllN7I13eTR6IZiH72g" 
          });
          
          if (token) {
            console.log('Token:', token);
            localStorage.setItem('fcmToken', token);
            // ارسال توکن به سرور
            // await sendTokenToServer(token);
          }
        }
      } catch (error) {
        console.error('Error getting token:', error);
      }
    };

    requestPermission();

    // مدیریت نوتیفیکیشن‌های دریافتی در حالت foreground
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log('Message received:', payload);
      toast.info(payload.notification?.body || 'New notification', {
        position: "top-right",
        autoClose: 5000,
      });
    });

    return () => unsubscribe();
  }, []);

  return null;
};

export default NotificationComponent;

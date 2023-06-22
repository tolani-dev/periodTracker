import { alertController, loadingController } from "@ionic/vue";

export const loader = async () => {
  const loading = await loadingController.create({
    spinner: "dots",
    mode: "ios",
    translucent: true,
    cssClass: "custom-class custom-loading",
    backdropDismiss: false,
  });
  return loading;
};

export const toCurrency = (value: any) => {
  const formatter = new Intl.NumberFormat("en-US");
  return formatter.format(value);
};

export const presentAlertConfirm = async (
  msg: string,
  action?: any,
  actionParam?: any
) => {
  const alert = await alertController.create({
    cssClass: "my-custom-class",
    header: "Confirm!",
    message: msg,
    buttons: [
      {
        text: "Never mind",
        role: "cancel",
        cssClass: "secondary",
        id: "cancel-button",
        handler: () => {
          //nothing
        },
      },
      {
        text: "Yes please",
        id: "confirm-button",
        handler: () => {
          action(actionParam);
        },
      },
    ],
  });
  return alert.present();
};

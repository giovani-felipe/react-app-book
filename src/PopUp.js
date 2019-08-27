import M from "materialize-css";

const PopUp = {
  exibeMensagem: (status, msg) => {
    switch (status) {
      case "success":
        PopUp.criaMensagem(msg, "green", 2000);
        break;
      case "error":
        PopUp.criaMensagem(msg, "red", 2000);
        break;
      case "info":
        PopUp.criaMensagem(msg, "light-blue", 2000);
        break;
      default:
        break;
    }
  },
  criaMensagem: (html, classes, displayLength) =>
    M.toast({ html, classes, displayLength })
};

export default PopUp;

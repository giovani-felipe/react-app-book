import M from "materialize-css";

const PopUp = {
  exibeMensagem: (status, msg) => {
    switch (status) {
      case "success":
        this.criaMensagem(msg, "green", 2000);
        break;
      case "error":
        this.criaMensagem(msg, "red", 2000);
        break;
      case "info":
        this.criaMensagem(msg, "yellow", 2000);
        break;
      default:
        this.criaMensagem(msg, "blue", 2000);
        break;
    }
  },
  criaMensagem: (html, classes, displayLength) =>
    M.toast({ html, classes, displayLength })
};

export default PopUp;

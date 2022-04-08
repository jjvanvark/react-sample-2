const colorMapper = (id) => {
  switch (id) {
    case "2":
      return "westAfrika";
    case "3":
      return "nederland";
    case "4":
      return "spaans";
    case "5":
      return "europa";
    case "6":
      return "admiraliteit";
    case "7":
      return "verkenning";
    case "8":
      return "kaper";
    default:
      return "driehoek";
  }
};

export default colorMapper;

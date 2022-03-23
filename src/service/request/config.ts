const TIME_OUT = 5000;
let BASE_URL = "";
if (process.env.NODE_ENV === "development") {
  BASE_URL = "/api";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://39.105.207.193:8000";
} else {
  BASE_URL = "http://39.105.207.193:8000";
}

export { TIME_OUT, BASE_URL };

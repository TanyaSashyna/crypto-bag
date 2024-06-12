import { observable } from "mobx";

export class AppStore {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @observable data: any = "";

  async getData(): Promise<void> {
    await fetch("https://httpbin.org/json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.data = data;
        console.log(data)
      })
      .catch((e) => console.log("failed", e));
  }

  async postData(): Promise<void> {
    fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        ContentType: "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ k: "v" }),
    });
  }
}

const store = new AppStore();
export default store;
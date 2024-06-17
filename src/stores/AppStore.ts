import { observable } from "mobx";

const investedMockData = [
  {
    date: '24.10.22',
    sum: '$103',
    expenseItem: 'Пополнение WhiteBit',
    comment: '',
    expenses: [
      {
        sum: '$103',
        expenseItem: 'Спот WhiteBit',
        comment: '',
      }
    ],
  },
  {
    date: '09.11.22',
    sum: '$52',
    expenseItem: 'Пополнение WhiteBit',
    comment: '',
    expenses: [
      {
        sum: '$52',
        expenseItem: 'Спот WhiteBit',
        comment: '',
      }
    ],
  },
];

export type InvestedData = {
  date: string;
  sum: string;
  expenseItem: string;
  comment: string;
  expenses?: InvestedData[];
}

export class AppStore {
  @observable investedData: InvestedData[] = investedMockData as InvestedData[];
  @observable totalInvested: number = 6091;
  @observable notInvolved: number = 649.08;

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
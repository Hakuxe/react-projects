interface ITransaction {
   date: string,
   category: string,
   amount: number,
   title: string
}


type AddTransation = (data :Transaction) => void;
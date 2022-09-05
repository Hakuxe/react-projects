interface ITransaction {
   date: string,
   category: string,
   amount: string,
   title: string
}


type AddTransation = (data :Transaction) => void;
import React from 'react'
import { Container, Table } from './budgetHistoryStyles'

export default function BudgetHistory() {
  return (
    <Container>

      <Table>
         <thead>
            <th>Data</th>
            <th>Categoria</th>
            <th>Titulo</th>
            <th>Valor</th>
         </thead>
         <tbody>
            <tr>
               <td>10/12/2022</td>
               <td>Alimentação</td>
               <td>BurgerKing</td>
               <td>R$ 40,00</td>

            </tr>
            <tr>
               <td>10/12/2022</td>
               <td>Alimentação</td>
               <td>BurgerKing</td>
               <td>R$ 40,00</td>

            </tr>
            <tr>
               <td>10/12/2022</td>
               <td>Alimentação</td>
               <td>BurgerKing</td>
               <td>R$ 40,00</td>

            </tr>
         </tbody>
      </Table>
    </Container>
  )
}

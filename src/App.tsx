import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth } from './helpers/dateFilter';




const App = () => {
  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredList, setFilteredList] = useState();


  //PAREI NA LISTA FILTRADA! 38:00
  //PAREI NA LISTA FILTRADA!
  //PAREI NA LISTA FILTRADA!
  //PAREI NA LISTA FILTRADA!
  //PAREI NA LISTA FILTRADA!
  //PAREI NA LISTA FILTRADA!
  //PAREI NA LISTA FILTRADA!
  //PAREI NA LISTA FILTRADA!
  //PAREI NA LISTA FILTRADA!
  //PAREI NA LISTA FILTRADA!
  //PAREI NA LISTA FILTRADA!
  //PAREI NA LISTA FILTRADA!
  //PAREI NA LISTA FILTRADA!


  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>






      </C.Body>
    </C.Container>
  );
}

export default App;
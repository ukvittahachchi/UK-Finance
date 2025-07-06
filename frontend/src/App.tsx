import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import Cardlist from './Components/Cardlist/Cardlist';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';

function App() {
  const [search, setSearch] = useState<string>("");
  const [portfoliovalue, setPortfolioValue] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();  
    const exists = portfoliovalue.find((value) => value === e.target[0].value);
    if (exists) return;
    const updatedPortfolio = [...portfoliovalue, e.target[0].value];
    setPortfolioValue(updatedPortfolio);
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const removed = portfoliovalue.filter((value) =>{
      return value !== e.target[0].value;
    });
    setPortfolioValue(removed);
  }

  const onSearchSubmit: (e: SyntheticEvent) => Promise<void> = async (e) => {
    e.preventDefault();
    const result = await searchCompanies(search);

    if (typeof result === "string") {
      setServerError(result);
      setSearchResult([]);
    } else if (Array.isArray(result)) {
      setSearchResult(result);
      setServerError(null);
    }

    console.log("Search Result:", result);
  }

  return (
    <div className="App">
      <Search 
      onSearchSubmit={onSearchSubmit} 
      search={search} 
      handleSearchChange={handleSearchChange} 
      />
      <ListPortfolio 
      portfolioValues={portfoliovalue} 
      onPortfolioDelete={onPortfolioDelete} 
      />
      <Cardlist 
      searchResult={searchResult} 
      onPortfolioCreate={onPortfolioCreate}
      />
      {serverError && <div>Unable to connect to API: {serverError}</div>}
    </div>
  );
}

export default App;

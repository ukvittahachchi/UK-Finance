import React, { JSX, PureComponent, SyntheticEvent } from 'react'
import "./Card.css";
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface Props  {
    id:string;
    searchResult: CompanySearch;
    onPortfolioCreate:(e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
    id:string,
    searchResult,
    onPortfolioCreate
    }:Props): JSX.Element =>{
    return (
      <div className='Card'>
         <img  alt="company logo"  />
      <div className='details'>
            <h2>
            {searchResult.name}({searchResult.symbol})
            </h2>
        <p>
            {searchResult.currency}
        </p>
        </div>
        <p className= 'info'>
            {searchResult.exchangeShortName}-{searchResult.stockExchange}
        </p>
        <AddPortfolio 
            onPortfolioCreate={onPortfolioCreate} 
            symbol={searchResult.symbol}
        />
      </div>
      
    )
} 

export default Card
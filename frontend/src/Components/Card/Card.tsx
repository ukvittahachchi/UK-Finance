import React, { JSX, PureComponent, SyntheticEvent } from 'react'
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';
import { Link } from 'react-router-dom';

interface Props  {
    id:string;
    searchResult: CompanySearch;
    onPortfolioCreate:(e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
    id,
    searchResult,
    onPortfolioCreate
    }:Props): JSX.Element =>{
    return (
      <div
        className="relative flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 md:flex-row group"
        key={id}
        id={id}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10 flex flex-col items-center md:items-start space-y-2 md:space-y-1 w-full md:w-auto">
          <Link
            to={`/company/${searchResult.symbol}`}
            className="font-bold text-center text-indigo-900 md:text-left text-lg hover:text-indigo-600 transition-colors duration-200">
            {searchResult.name}<span className="text-indigo-500 ml-1">({searchResult.symbol})</span>
          </Link>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full animate-pulse">
              {searchResult.currency}
            </span>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
              {searchResult.exchangeShortName}
            </span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              {searchResult.stockExchange}
            </span>
          </div>
        </div>
        
        <div className="relative z-10 mt-4 md:mt-0 transition-transform duration-300 hover:scale-105">
          <AddPortfolio
            onPortfolioCreate={onPortfolioCreate}
            symbol={searchResult.symbol}
          />
        </div>
      </div>
    )
} 

export default Card
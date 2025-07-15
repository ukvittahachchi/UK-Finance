import React, { useEffect, useState } from 'react';
import { CompanyKeyMetrics } from ''
import { useOutletContext } from 'react-router-dom';  // Fixed typo: 'react-router dom' to 'react-router-dom'
import { getKeyMetrics } from '../../api';
import RatioList from '../RatioList/RatioList';  // You need to import RatioList component

const tableConfig = [
  {
    label: "Market Cap",
    render: (company) => company.marketCapTTM,
  },
  {
    label: "Current Ratio",
    render: (company) => company.currentRatioTTM,
  },
  {
    label: "Return On Equity",
    render: (company) => company.roeTTM,
  },
  {
    label: "Cash Per Share",
    render: (company) => company.cashPerShareTTM,
  },
  // Removed duplicate entries for "Current Ratio" and "Return On Equity"
];

const CompanyProfile = (props) => {
  const ticker = useOutletContext();
  const [companyData, setCompanyData] = useState();  // Fixed variable name inconsistency
  
  useEffect(() => {
    const getCompanyKeyMetrics = async () => {
      const value = await getKeyMetrics(ticker);
      setCompanyData(value?.data[0]);
    };
    getCompanyKeyMetrics();  // You need to call the function
  }, [ticker]);  // Added ticker as dependency

  return (
    <>
      {companyData ? (
        <>
          <RatioList config={tableConfig} data={companyData} />
        </>
      ) : (
        <h1>No data found</h1>
      )}
    </>
  );
};

export default CompanyProfile;
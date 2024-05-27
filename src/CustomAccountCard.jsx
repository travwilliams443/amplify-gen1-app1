import React, { useState } from 'react';
import { get } from 'aws-amplify/api';
import { AccountCard } from './ui-components';

const CustomAccountCard = (props) => {
  const [dateInfo, setDateInfo] = useState('');

  const fetchDateInfo = async () => {
    try {
      const restOperation = get({
        apiName: 'api0ec468ff',
        path: '/api'
      });

      const { body } = await restOperation.response;

      const json = await body.json();

      console.log('GET call succeeded: ', json);

      setDateInfo(`As of ${json.date}`);
    } catch (e) {
      console.log('GET call failed: ', e);
    }
  };

  return (
    <div>
      <AccountCard
        account={props.account}
        overrides={{
          Balance: {
            onClick: fetchDateInfo,
            style: { cursor: 'pointer', color: 'blue' }
          },
          AsOfDatetime: {
            children: dateInfo // This sets the date info into the AsOfDatetime field
          }
        }}
      />
      {/*dateInfo && <p>{dateInfo}</p>*/}
    </div>
  );
};

export default CustomAccountCard;

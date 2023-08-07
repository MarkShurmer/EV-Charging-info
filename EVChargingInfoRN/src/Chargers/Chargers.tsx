import {LinearProgress, SearchBar, Text} from '@rneui/themed';
import {useEffect, useState} from 'react';
import {ChargeDevice} from '../types';
import {getData, getDefaultFilters} from '../ncr-service';
import {ScrollView} from 'react-native';
import {ChargeInfo} from './ChargeInfo';

function Chargers() {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chargerList, setChargerList] = useState<Array<ChargeDevice>>([]);

  const getChargers = async (postCode: string) => {
    const chargers = await getData({
      ...getDefaultFilters(),
      postcode: postCode,
    });
    switch (typeof chargers) {
      case 'object':
        setChargerList(chargers);
      case 'string':
      default:
    }
  };

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  useEffect(() => {
    if (search.length > 5) {
      setIsLoading(true);
      setChargerList([]);
      getChargers(search)
        .then(() => {
          setIsLoading(false);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [search]);

  return (
    <>
      <SearchBar
        placeholder="Enter postcode or town"
        onChangeText={updateSearch}
        value={search}
      />
      {isLoading ? (
        <>
          <Text>Loading...</Text>
          <LinearProgress style={{marginVertical: 10}} />
        </>
      ) : null}
      <ScrollView>
        {chargerList.map(charger => (
          <ChargeInfo charger={charger} />
        ))}
      </ScrollView>
    </>
  );
}

export {Chargers};

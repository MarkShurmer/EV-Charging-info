import {ChargeDevice} from '../types';
import {Card, Text} from '@rneui/themed';

export type ChargeInfoProps = {
  charger: ChargeDevice;
};

function ChargeInfo(props: ChargeInfoProps) {
  const {charger} = props;

  return (
    <Card key={charger.ChargeDeviceId}>
      <Text>{charger.ChargeDeviceName}</Text>
      <Text>{charger.ChargeDeviceStatus}</Text>
    </Card>
  );
}

export {ChargeInfo};

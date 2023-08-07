import {NCR_API} from './constants';
import {ChargeDeviceResponse, ConnectorType, Filters} from './types';

export function getDefaultFilters(): Omit<Filters, 'postcode'> {
  return {connector: ConnectorType.CCS, speed: 150, distance: 10};
}

export async function getData(filter: Filters) {
  const url = `Using url ${NCR_API}/dist/${filter.distance}/postcode/${filter.postcode}/rated-output-kw/${filter.speed}/connector-type-id/${filter.connector}`;
  console.info(`Using url ${url}`);
  const response = await fetch(url);

  if (response.ok) {
    const chargingDevices = (await response.json()) as ChargeDeviceResponse;
    return chargingDevices.ChargeDevice;
  }

  return response.statusText;
}

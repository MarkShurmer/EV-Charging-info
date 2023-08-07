export type ChargeDeviceResponse = {
  ChargeDevice: Array<ChargeDevice>;
};

export type Guid = string;
export type ElectricityType = 'AC' | 'DC';
export type Nullable<T> = T | null;
export type ChargeDeviceLocation = {};

export type ChargeAddress = {
  SubBuildingName: Nullable<string>;
  BuildingName: Nullable<string>;
  BuildingNumber: Nullable<string>;
  Thoroughfare: Nullable<string>;
  Street: string;
  DoubleDependantLocality: Nullable<string>;
  DependantLocality: Nullable<string>;
  PostTown: string;
  County: string;
  PostCode: string;
  Country: string;
  UPRN: Nullable<string>;
};

export type Connector = {
  ConnectorId: string;
  ConnectorType: string;
  RatedOutputkW: number;
  RatedOutputVoltage: number;
  RatedOutputCurrent: number;
  ChargeMethod: ElectricityType;
  ChargeMode: number;
  ChargePointStatus: string;
  TetheredCable: number;
  Information: Nullable<string>;
  Validated: number;
};

export type ChargeDevice = {
  ChargeDeviceId: Guid;
  ChargeDeviceRef: string;
  ChargeDeviceName: string;
  ChargeDeviceText?: string;
  ChargeDeviceLocation: {
    Latitude: number;
    Longitude: number;
    Address: ChargeAddress;
    LocationShortDescription: string | null;
    LocationLongDescription: Nullable<string>;
  };
  ChargeDeviceManufacturer: string;
  ChargeDeviceModel: Nullable<string>;
  PublishStatusID: string;
  DateCreated: Date;
  DateUpdated: Date;
  Attribution: string;
  DateDeleted: Date | 'n/a';
  Connector: Array<Connector>;
  DeviceOwner: {
    OrganisationName: string;
    SchemeCode: string;
    Website: string;
    TelephoneNo: string;
  };
  DeviceController: {
    OrganisationName: string;
    SchemeCode: string;
    Website: string;
    TelephoneNo: string;
  };
  DeviceAccess: [];
  DeviceNetworks: string;
  ChargeDeviceStatus: string;
  PublishStatus: string;
  DeviceValidated: number;
  RecordModerated: 'N';
  RecordLastUpdated: Nullable<Date>;
  RecordLastUpdatedBy: string;
  PaymentRequiredFlag: boolean;
  PaymentDetails: Nullable<string>;
  SubscriptionRequiredFlag: boolean;
  SubscriptionDetails: Nullable<string>;
  ParkingFeesFlag: boolean;
  ParkingFeesDetails: Nullable<string>;
  ParkingFeesUrl: Nullable<string>;
  AccessRestrictionFlag: boolean;
  AccessRestrictionDetails: Nullable<string>;
  PhysicalRestrictionFlag: boolean;
  PhysicalRestrictionText: Nullable<string>;
  OnStreetFlag: boolean;
  LocationType: string;
  Bearing: Nullable<string>;
  Accessible24Hours: boolean;
};

export enum ConnectorType {
  Type3 = 3,
  CHAdeMO = 4,
  Type1 = 5,
  Mennekes = 6,
  Scame = 7,
  CCS = 15,
  Type2Tesla = 16,
  Commando2p = 17,
  Commando3p = 17,
}

export type Filters = {
  postcode: string;
  speed: number;
  distance: number;
  connector: ConnectorType;
};

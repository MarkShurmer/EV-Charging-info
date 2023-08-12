export type Address = {
  SubBuildingName: string | null;
  BuildingName: string | null;
  BuildingNumber: string | null;
  Thoroughfare: string | null;
  Street: string;
  DoubleDependantLocality: string | null;
  DependantLocality: string | null;
  PostTown: string;
  County: string | null;
  PostCode: string;
  Country: string;
  UPRN: string | null;
};

export type ChargeDeviceLocation = {
  Latitude: number;
  Longitude: number;
  Address: Address;
  LocationShortDescription: string | null;
  LocationLongDescription: string | null;
};

export type Connector = {
  ConnectorId: string;
  ConnectorType: string;
  RatedOutputkW: number;
  RatedOutputVoltage: number;
  RatedOutputCurrent: number;
  ChargeMethod: string;
  ChargeMode: number;
  ChargePointStatus: string;
  TetheredCable: string;
  Information: string | null;
  Validated: number;
};

export type Party = {
  OrganisationName: string;
  SchemeCode: string;
  Website: string;
  TelephoneNo: string;
};

export type ChargeDevice = {
  ChargeDeviceId: string;
  ChargeDeviceRef: string;
  ChargeDeviceName: string;
  ChargeDeviceText: string | null;
  ChargeDeviceLocation: ChargeDeviceLocation;
  ChargeDeviceManufacturer: string;
  ChargeDeviceModel: string | null;
  PublishStatusID: string;
  DateCreated: Date;
  DateUpdated: Date;
  Attribution: string;
  DateDeleted: string;
  Connector: Array<Connector>;
  DeviceOwner: Party;
  DeviceController: Party;
  DeviceAccess: [];
  DeviceNetworks: string;
  ChargeDeviceStatus: string;
  PublishStatus: string;
  DeviceValidated: number;
  RecordModerated: string;
  RecordLastUpdated: null;
  RecordLastUpdatedBy: string;
  PaymentRequiredFlag: boolean;
  PaymentDetails: string | null;
  SubscriptionRequiredFlag: boolean;
  SubscriptionDetails: string | null;
  ParkingFeesFlag: boolean;
  ParkingFeesDetails: string | null;
  ParkingFeesUrl: string | null;
  AccessRestrictionFlag: boolean;
  AccessRestrictionDetails: string | null;
  PhysicalRestrictionFlag: boolean;
  PhysicalRestrictionText: string | null;
  OnStreetFlag: boolean;
  LocationType: string;
  Bearing: string | null;
  Accessible24Hours: boolean;
};

export type ChargeResult = {
  Scheme: {
    SchemeCode: string;
    SchemeData: {
      OrganisationName: string;
      Website: string;
      TelephoneNo: string;
    };
  };
  ChargeDevice: Array<ChargeDevice>;
};

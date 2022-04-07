export class Driver
{
    _id: string | undefined;
    captainName: string | undefined;
    contactNumber: string | undefined;
    emergencyContactNumber: string | undefined;
    completeAddress: string | undefined;
    emailAddress: string | undefined;
    cnicNumber: string | undefined;
    drivingLicenseNumber: string | undefined;
    carType: string | undefined;
    carMaking: string | undefined;
    carModel: string | undefined;
    carColor: string | undefined;
    carPlateNumber: string | undefined;
    referenceName: string | undefined;
    rating: string | undefined;
}

export class DriversCollection
{
    constructor(public drivers: Driver[]) { }

    public addDriver(payload: Driver): void
    {
        this.drivers.push(payload);
    }

    public getDriverById(driverId: string): Driver[]
    {
        /* eslint-disable */
        return this.drivers.filter((item: any) => item._id === driverId)
    }
}
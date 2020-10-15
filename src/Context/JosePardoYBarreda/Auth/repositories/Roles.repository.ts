import Roles, { IRoles } from '../models/Roles.model'

export default class RolesRepository {

    async insertRole(role: IRoles): Promise<IRoles> {

        const insertrole: IRoles = await Roles.create(role);

        return insertrole;
    }

    async getRole(): Promise<IRoles[]> {

        const getrole: IRoles[] = await Roles.find();

        return getrole;

    }

    async getRoleById(_id: String): Promise<IRoles> {

        const getrolebyid: IRoles = await Roles.findById(_id);

        return getrolebyid;

    }

    async getRolUpdate(_id: String, role: IRoles): Promise<IRoles> {

        const getrolupdate: IRoles = await Roles.findByIdAndUpdate(
            { _id },
            role,
            {
                new: true,
            });

        return getrolupdate;

    }
}
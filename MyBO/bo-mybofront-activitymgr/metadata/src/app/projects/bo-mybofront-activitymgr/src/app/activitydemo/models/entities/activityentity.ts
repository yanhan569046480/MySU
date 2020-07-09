
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity } from '@farris/devkit';

export class ActivityEntity extends Entity {

    @NgField({
        originalDataField: 'ID',
        dataField: 'id',
        primary: true,
        initValue: '',
        path: 'ID',

        validRules: [
            {
                type: 'required',
            },
            {
                type: 'maxLength',
                constraints: [36],
            }
        ]
    })
    id: string;

    @NgField({
        originalDataField: 'Version',
        dataField: 'version',
        initValue: '0001-01-01T00:00:00',
        path: 'Version',
    })
    version: string;

    @NgField({
        originalDataField: 'Code',
        dataField: 'code',
        initValue: '',
        path: 'Code',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
            }
        ]
    })
    code: string;

    @NgField({
        originalDataField: 'Title',
        dataField: 'title',
        initValue: '',
        path: 'Title',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
            }
        ]
    })
    title: string;

    @NgField({
        originalDataField: 'Location',
        dataField: 'location',
        initValue: '',
        path: 'Location',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
            }
        ]
    })
    location: string;

    @NgField({
        originalDataField: 'GeoLng',
        dataField: 'geoLng',
        initValue: '',
        path: 'GeoLng',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
            }
        ]
    })
    geoLng: string;

    @NgField({
        originalDataField: 'GeoLat',
        dataField: 'geoLat',
        initValue: '',
        path: 'GeoLat',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
            }
        ]
    })
    geoLat: string;

}
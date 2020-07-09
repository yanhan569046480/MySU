import * as tslib_1 from "tslib";
import { Entity, NgField } from '@farris/devkit';
var ActivityEntity = /** @class */ (function (_super) {
    tslib_1.__extends(ActivityEntity, _super);
    function ActivityEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], ActivityEntity.prototype, "id", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Version',
            dataField: 'version',
            initValue: '0001-01-01T00:00:00',
            path: 'Version',
        }),
        tslib_1.__metadata("design:type", String)
    ], ActivityEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], ActivityEntity.prototype, "code", void 0);
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], ActivityEntity.prototype, "title", void 0);
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], ActivityEntity.prototype, "location", void 0);
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], ActivityEntity.prototype, "geoLng", void 0);
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], ActivityEntity.prototype, "geoLat", void 0);
    return ActivityEntity;
}(Entity));
export { ActivityEntity };

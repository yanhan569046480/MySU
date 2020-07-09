{
  "Header": {
    "ID": "682fd82d-4eb1-468e-a123-db8ef27ad138",
    "CertID": null,
    "NameSpace": "Inspur.GS.Gsp.MySU.MyBO",
    "Code": "Activity",
    "Name": "活动",
    "FileName": "Activity.be",
    "Type": "GSPBusinessEntity",
    "BizobjectID": "dc9da51b-7c66-49ea-b1e2-ce8de67ab080",
    "Language": null,
    "IsTranslating": false,
    "Extendable": false
  },
  "Refs": [
    {
      "Metadata": {
        "ID": "682fd82d-4eb1-468e-a123-db8ef27ad138",
        "CertID": null,
        "NameSpace": "Inspur.GS.Gsp.MySU.MyBO",
        "Code": "Activity",
        "Name": "活动",
        "FileName": "Activity.be",
        "Type": "GSPBusinessEntity",
        "BizobjectID": "dc9da51b-7c66-49ea-b1e2-ce8de67ab080",
        "Language": null,
        "IsTranslating": false,
        "Extendable": false
      },
      "DependentMetadata": {
        "ID": "a54a3a9e-b1ca-4b25-af56-d6b98c6e90f1",
        "CertID": null,
        "NameSpace": "Inspur.GS.Gsp.MySU.MyBO",
        "Code": "Activity.be",
        "Name": "Activity.be",
        "FileName": "Activity.be.res",
        "Type": "ResourceMetadata",
        "BizobjectID": "dc9da51b-7c66-49ea-b1e2-ce8de67ab080",
        "Language": null,
        "IsTranslating": false,
        "Extendable": false
      },
      "ReferenceDetail": null
    }
  ],
  "Content": {
    "ID": "682fd82d-4eb1-468e-a123-db8ef27ad138",
    "I18nResourceInfoPrefix": "Inspur.GS.Gsp.MySU.MyBO.Activity",
    "MainObject": {
      "ID": "562f2cd0-5264-4690-a75e-d51ff77f6743",
      "Code": "Activity",
      "Name": "活动",
      "IsRef": false,
      "I18nResourceInfoPrefix": "Inspur.GS.Gsp.MySU.MyBO.Activity.Activity",
      "CustomizationInfo": {
        "Customized": false,
        "DimensionInfo": {
          "FirstDimension": null,
          "SecondDimension": null
        }
      },
      "BeLabel": [],
      "ContainElements": [
        {
          "ID": "d50f7bde-5474-46ea-a3a2-a279cb494ed1",
          "LabelID": "ID",
          "IsRef": false,
          "I18nResourceInfoPrefix": "Inspur.GS.Gsp.MySU.MyBO.Activity.Activity.ID",
          "ChildAssociations": [],
          "ColumnID": "ee790e1a-c01b-48bf-bae0-c2ddf34da04d",
          "BelongModelID": "",
          "Code": "ID",
          "Name": "ID",
          "ObjectType": "None",
          "MDataType": "String",
          "DefaultValue": "",
          "DefaultValueType": 0,
          "Length": 36,
          "Precision": 0,
          "IsRequire": true,
          "IsMultiLanguage": false,
          "IsRefElement": false,
          "RefElementID": "",
          "IsUdt": false,
          "UdtPkgName": null,
          "UdtID": null,
          "UdtName": null,
          "IsVirtual": false,
          "DynamicPropSetInfo": {
            "DynamicPropRepositoryComp": null,
            "DynamicPropSerializerComp": null
          },
          "CustomizationInfo": {
            "Customized": false,
            "DimensionInfo": {
              "FirstDimension": null,
              "SecondDimension": null
            }
          },
          "EnumIndexType": 0,
          "BeLabel": [],
          "ContainEnumValues": [],
          "CollectionType": "None",
          "IsFromAssoUdt": false,
          "BillCodeConfig": {
            "CanBillCode": false,
            "CodeGenerateOccasion": "SystemProcess",
            "CodeGenerateType": "none",
            "BillCodeName": null,
            "BillCodeID": ""
          },
          "Readonly": false,
          "IsCustomItem": false,
          "CalculationExpress": null,
          "ValidationExpress": null,
          "IsDefaultNull": false,
          "RequiredCheckOccasion": "All"
        },
        {
          "ID": "ea400b99-dba8-4fd9-98b6-5cefc6abace4",
          "LabelID": "Version",
          "IsRef": false,
          "I18nResourceInfoPrefix": "Inspur.GS.Gsp.MySU.MyBO.Activity.Activity.Version",
          "ChildAssociations": [],
          "ColumnID": "dd2ac8b3-b139-4f75-9c0e-cf50cb0dc660",
          "BelongModelID": "",
          "Code": "Version",
          "Name": "Version",
          "ObjectType": "None",
          "MDataType": "DateTime",
          "DefaultValue": "",
          "DefaultValueType": 0,
          "Length": 0,
          "Precision": 0,
          "IsRequire": false,
          "IsMultiLanguage": false,
          "IsRefElement": false,
          "RefElementID": "",
          "IsUdt": false,
          "UdtPkgName": null,
          "UdtID": null,
          "UdtName": null,
          "IsVirtual": false,
          "DynamicPropSetInfo": {
            "DynamicPropRepositoryComp": null,
            "DynamicPropSerializerComp": null
          },
          "CustomizationInfo": {
            "Customized": false,
            "DimensionInfo": {
              "FirstDimension": null,
              "SecondDimension": null
            }
          },
          "EnumIndexType": 0,
          "BeLabel": [],
          "ContainEnumValues": [],
          "CollectionType": "None",
          "IsFromAssoUdt": false,
          "BillCodeConfig": {
            "CanBillCode": false,
            "CodeGenerateOccasion": "SystemProcess",
            "CodeGenerateType": "none",
            "BillCodeName": null,
            "BillCodeID": ""
          },
          "Readonly": false,
          "IsCustomItem": false,
          "CalculationExpress": null,
          "ValidationExpress": null,
          "IsDefaultNull": false,
          "RequiredCheckOccasion": "All"
        },
        {
          "ID": "2175df89-aafc-451a-ba26-0e795488ed50",
          "LabelID": "Code",
          "IsRef": false,
          "I18nResourceInfoPrefix": "Inspur.GS.Gsp.MySU.MyBO.Activity.Activity.Code",
          "ChildAssociations": [],
          "ColumnID": "418da84a-42ce-4020-805d-368063d62d53",
          "BelongModelID": "",
          "Code": "Code",
          "Name": "活动编号",
          "ObjectType": "None",
          "MDataType": "String",
          "DefaultValue": "",
          "DefaultValueType": 0,
          "Length": 36,
          "Precision": 0,
          "IsRequire": false,
          "IsMultiLanguage": false,
          "IsRefElement": false,
          "RefElementID": "",
          "IsUdt": false,
          "UdtPkgName": null,
          "UdtID": null,
          "UdtName": null,
          "IsVirtual": false,
          "DynamicPropSetInfo": {
            "DynamicPropRepositoryComp": null,
            "DynamicPropSerializerComp": null
          },
          "CustomizationInfo": {
            "Customized": false,
            "DimensionInfo": {
              "FirstDimension": null,
              "SecondDimension": null
            }
          },
          "EnumIndexType": 0,
          "BeLabel": [],
          "ContainEnumValues": [],
          "CollectionType": "None",
          "IsFromAssoUdt": false,
          "BillCodeConfig": {
            "CanBillCode": false,
            "CodeGenerateOccasion": "SystemProcess",
            "CodeGenerateType": "none",
            "BillCodeName": null,
            "BillCodeID": ""
          },
          "Readonly": false,
          "IsCustomItem": false,
          "CalculationExpress": null,
          "ValidationExpress": null,
          "IsDefaultNull": false,
          "RequiredCheckOccasion": "All"
        },
        {
          "ID": "eea60965-cf32-471f-87fe-93231364e6ce",
          "LabelID": "Title",
          "IsRef": false,
          "I18nResourceInfoPrefix": "Inspur.GS.Gsp.MySU.MyBO.Activity.Activity.Title",
          "ChildAssociations": [],
          "ColumnID": "d8857094-0302-4180-b45c-b5455af397cb",
          "BelongModelID": "",
          "Code": "Title",
          "Name": "活动主题",
          "ObjectType": "None",
          "MDataType": "String",
          "DefaultValue": "",
          "DefaultValueType": 0,
          "Length": 36,
          "Precision": 0,
          "IsRequire": false,
          "IsMultiLanguage": false,
          "IsRefElement": false,
          "RefElementID": "",
          "IsUdt": false,
          "UdtPkgName": null,
          "UdtID": null,
          "UdtName": null,
          "IsVirtual": false,
          "DynamicPropSetInfo": {
            "DynamicPropRepositoryComp": null,
            "DynamicPropSerializerComp": null
          },
          "CustomizationInfo": {
            "Customized": false,
            "DimensionInfo": {
              "FirstDimension": null,
              "SecondDimension": null
            }
          },
          "EnumIndexType": 0,
          "BeLabel": [],
          "ContainEnumValues": [],
          "CollectionType": "None",
          "IsFromAssoUdt": false,
          "BillCodeConfig": {
            "CanBillCode": false,
            "CodeGenerateOccasion": "SystemProcess",
            "CodeGenerateType": "none",
            "BillCodeName": null,
            "BillCodeID": ""
          },
          "Readonly": false,
          "IsCustomItem": false,
          "CalculationExpress": null,
          "ValidationExpress": null,
          "IsDefaultNull": false,
          "RequiredCheckOccasion": "All"
        },
        {
          "ID": "62ed45d7-2121-4c33-add2-ad34da0eb6de",
          "LabelID": "Location",
          "IsRef": false,
          "I18nResourceInfoPrefix": "Inspur.GS.Gsp.MySU.MyBO.Activity.Activity.Location",
          "ChildAssociations": [],
          "ColumnID": "93353ca0-359c-410a-a3b6-ebe38c3c9794",
          "BelongModelID": "",
          "Code": "Location",
          "Name": "活动地点",
          "ObjectType": "None",
          "MDataType": "String",
          "DefaultValue": "",
          "DefaultValueType": 0,
          "Length": 36,
          "Precision": 0,
          "IsRequire": false,
          "IsMultiLanguage": false,
          "IsRefElement": false,
          "RefElementID": "",
          "IsUdt": false,
          "UdtPkgName": null,
          "UdtID": null,
          "UdtName": null,
          "IsVirtual": false,
          "DynamicPropSetInfo": {
            "DynamicPropRepositoryComp": null,
            "DynamicPropSerializerComp": null
          },
          "CustomizationInfo": {
            "Customized": false,
            "DimensionInfo": {
              "FirstDimension": null,
              "SecondDimension": null
            }
          },
          "EnumIndexType": 0,
          "BeLabel": [],
          "ContainEnumValues": [],
          "CollectionType": "None",
          "IsFromAssoUdt": false,
          "BillCodeConfig": {
            "CanBillCode": false,
            "CodeGenerateOccasion": "SystemProcess",
            "CodeGenerateType": "none",
            "BillCodeName": null,
            "BillCodeID": ""
          },
          "Readonly": false,
          "IsCustomItem": false,
          "CalculationExpress": null,
          "ValidationExpress": null,
          "IsDefaultNull": false,
          "RequiredCheckOccasion": "All"
        },
        {
          "ID": "ac74a56f-76a3-4cea-a990-8932b3cdd9ca",
          "LabelID": "GeoLng",
          "IsRef": false,
          "I18nResourceInfoPrefix": "Inspur.GS.Gsp.MySU.MyBO.Activity.Activity.GeoLng",
          "ChildAssociations": [],
          "ColumnID": "070133e3-4170-4420-9477-f65b6dc0f402",
          "BelongModelID": "",
          "Code": "GeoLng",
          "Name": "地理经度",
          "ObjectType": "None",
          "MDataType": "String",
          "DefaultValue": "",
          "DefaultValueType": 0,
          "Length": 36,
          "Precision": 0,
          "IsRequire": false,
          "IsMultiLanguage": false,
          "IsRefElement": false,
          "RefElementID": "",
          "IsUdt": false,
          "UdtPkgName": null,
          "UdtID": null,
          "UdtName": null,
          "IsVirtual": false,
          "DynamicPropSetInfo": {
            "DynamicPropRepositoryComp": null,
            "DynamicPropSerializerComp": null
          },
          "CustomizationInfo": {
            "Customized": false,
            "DimensionInfo": {
              "FirstDimension": null,
              "SecondDimension": null
            }
          },
          "EnumIndexType": 0,
          "BeLabel": [],
          "ContainEnumValues": [],
          "CollectionType": "None",
          "IsFromAssoUdt": false,
          "BillCodeConfig": {
            "CanBillCode": false,
            "CodeGenerateOccasion": "SystemProcess",
            "CodeGenerateType": "none",
            "BillCodeName": null,
            "BillCodeID": ""
          },
          "Readonly": false,
          "IsCustomItem": false,
          "CalculationExpress": null,
          "ValidationExpress": null,
          "IsDefaultNull": false,
          "RequiredCheckOccasion": "All"
        },
        {
          "ID": "84e7e2db-2c21-4d39-95c2-7c61e8e7ce8b",
          "LabelID": "GeoLat",
          "IsRef": false,
          "I18nResourceInfoPrefix": "Inspur.GS.Gsp.MySU.MyBO.Activity.Activity.GeoLat",
          "ChildAssociations": [],
          "ColumnID": "2955e63f-618f-425a-ab23-d6d2f37df2b2",
          "BelongModelID": "",
          "Code": "GeoLat",
          "Name": "地理纬度",
          "ObjectType": "None",
          "MDataType": "String",
          "DefaultValue": "",
          "DefaultValueType": 0,
          "Length": 36,
          "Precision": 0,
          "IsRequire": false,
          "IsMultiLanguage": false,
          "IsRefElement": false,
          "RefElementID": "",
          "IsUdt": false,
          "UdtPkgName": null,
          "UdtID": null,
          "UdtName": null,
          "IsVirtual": false,
          "DynamicPropSetInfo": {
            "DynamicPropRepositoryComp": null,
            "DynamicPropSerializerComp": null
          },
          "CustomizationInfo": {
            "Customized": false,
            "DimensionInfo": {
              "FirstDimension": null,
              "SecondDimension": null
            }
          },
          "EnumIndexType": 0,
          "BeLabel": [],
          "ContainEnumValues": [],
          "CollectionType": "None",
          "IsFromAssoUdt": false,
          "BillCodeConfig": {
            "CanBillCode": false,
            "CodeGenerateOccasion": "SystemProcess",
            "CodeGenerateType": "none",
            "BillCodeName": null,
            "BillCodeID": ""
          },
          "Readonly": false,
          "IsCustomItem": false,
          "CalculationExpress": null,
          "ValidationExpress": null,
          "IsDefaultNull": false,
          "RequiredCheckOccasion": "All"
        }
      ],
      "ContainChildObjects": [],
      "RefObjectName": "2a8cb1e4-38ae-4397-b41f-53ea8d965792",
      "ObjectType": 0,
      "RepositoryComps": [],
      "Determinations": [],
      "Validations": [],
      "BizActions": [
        {
          "ID": "cJwzDlFfa0uz4rChlTEd4g",
          "Code": "Retrieve",
          "Name": "内置检索操作",
          "Description": null,
          "ComponentId": null,
          "ComponentName": null,
          "ComponentPkgName": null,
          "IsVisible": false,
          "BelongModelID": null,
          "IsGenerateComponent": false
        },
        {
          "ID": "tf9MVINdJ0yhUrsJgfcvBA",
          "Code": "Modify",
          "Name": "内置修改操作",
          "Description": null,
          "ComponentId": null,
          "ComponentName": null,
          "ComponentPkgName": null,
          "IsVisible": false,
          "BelongModelID": null,
          "IsGenerateComponent": false
        },
        {
          "ID": "aD73GrGaKEiA7N9jsPxIOQ",
          "Code": "Delete",
          "Name": "内置删除操作",
          "Description": null,
          "ComponentId": null,
          "ComponentName": null,
          "ComponentPkgName": null,
          "IsVisible": false,
          "BelongModelID": null,
          "IsGenerateComponent": false
        }
      ],
      "AuthFieldInfos": [],
      "LogicDelete": false,
      "ColumnGenerateID": {
        "ElementID": "d50f7bde-5474-46ea-a3a2-a279cb494ed1",
        "GernerateType": "Guid"
      },
      "ContainConstraints": [],
      "OrderbyCondition": "",
      "FilterCondition": "",
      "ModifiedDateElementID": "",
      "CreatorElementID": "",
      "CreatedDateElementID": "",
      "ModifierElementID": "",
      "RecordDelData": false,
      "IsReadOnly": false,
      "IsVirtual": false,
      "BelongModelID": "682fd82d-4eb1-468e-a123-db8ef27ad138",
      "HirarchyInfo": {
        "PathGenerateType": 0,
        "PathLength": 4
      },
      "Keys": [],
      "StateElementID": null
    },
    "Variables": {
      "ID": "1ff1d87e-963f-42a9-854b-d814c8bceb46",
      "Code": "ActivityVariable",
      "Name": "活动变量",
      "IsRef": false,
      "I18nResourceInfoPrefix": null,
      "CustomizationInfo": {
        "Customized": false,
        "DimensionInfo": {
          "FirstDimension": null,
          "SecondDimension": null
        }
      },
      "BeLabel": [],
      "ContainElements": []
    },
    "Code": "Activity",
    "Name": "活动",
    "IsVirtual": false,
    "EntityType": "",
    "PrimayKeyID": "ID",
    "GeneratingAssembly": "Inspur.GS.Gsp.MySU.MyBO",
    "IsUseNamespaceConfig": true,
    "VersionControlInfo": {
      "VersionControlElementId": "ea400b99-dba8-4fd9-98b6-5cefc6abace4"
    },
    "BeLabel": [],
    "FkConstraints": [],
    "BizMgrActions": [
      {
        "ID": "m_6xIwJwoUy7qzsuZ6_S5A",
        "Code": "Query",
        "Name": "内置查询操作",
        "Description": null,
        "ComponentId": null,
        "ComponentName": null,
        "ComponentPkgName": null,
        "IsVisible": false,
        "BelongModelID": null,
        "IsGenerateComponent": false
      },
      {
        "ID": "Tji_dbrLtEKQlOLRpOJj9Q",
        "Code": "RetrieveDefault",
        "Name": "内置新增操作",
        "Description": null,
        "ComponentId": null,
        "ComponentName": null,
        "ComponentPkgName": null,
        "IsVisible": false,
        "BelongModelID": null,
        "IsGenerateComponent": false
      },
      {
        "ID": "fQbpcO7bIEGoRdTZZIyrag",
        "Code": "Retrieve",
        "Name": "内置检索操作",
        "Description": null,
        "ComponentId": null,
        "ComponentName": null,
        "ComponentPkgName": null,
        "IsVisible": false,
        "BelongModelID": null,
        "IsGenerateComponent": false
      },
      {
        "ID": "8Wna6KaBQEOHpRJfmGMBYQ",
        "Code": "Modify",
        "Name": "内置修改操作",
        "Description": null,
        "ComponentId": null,
        "ComponentName": null,
        "ComponentPkgName": null,
        "IsVisible": false,
        "BelongModelID": null,
        "IsGenerateComponent": false
      },
      {
        "ID": "9sEsnADPFkCRK6ZBC0OwiA",
        "Code": "Delete",
        "Name": "内置删除操作",
        "Description": null,
        "ComponentId": null,
        "ComponentName": null,
        "ComponentPkgName": null,
        "IsVisible": false,
        "BelongModelID": null,
        "IsGenerateComponent": false
      }
    ],
    "DependentEntityId": null,
    "DependentEntityName": null,
    "DependentEntityPackageName": null,
    "CacheConfiguration": "",
    "EnableCaching": false,
    "EnableTreeDtm": true,
    "ComponentAssemblyName": "Inspur.GS.Gsp.MySU.MyBO",
    "Category": 0,
    "DataLockType": 0,
    "ExtendType": "GSPBusinessEntity",
    "IsUsingTimeStamp": false,
    "Authorizations": []
  },
  "RelativePath": "Gsp/MySU/MyBO/bo-activitymgr/metadata/be",
  "ExtendProperty": "",
  "Extended": null,
  "PreviousVersion": null,
  "Version": null
}
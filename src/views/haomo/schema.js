/**
 * @desc 数据库定义文件
 * @author hm20160509
 * @date 2018/2/5
 */

const ModelSchema = {
  'HmUser': {
    'model': 'HmUser',
    'modelPlural': 'HmUsers',
    'modelCamel': 'hmUser',
    'modelCamelPlural': 'hmUsers',
    'modelUnderscore': 'hm_user',
    'modelUnderscorePlural': 'hm_users',
    'columns': [
      {
        'id': 'o50',
        'objectId': '170A4473-36CC-47E1-96C3-F238F8132AA4',
        'name': '用户名字',
        'code': 'USERNAME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1517859502',
        'modifier': 'hm20160509',
        'dataType': 'VARCHAR2(256CHAR)',
        'length': '256',
        'codeCamel': 'username',
        'codeCamelPlural': 'usernames',
        'codeUnderscore': 'username',
        'codeUnderscorePlural': 'usernames',
        'type': 'string'
      },
      {
        'id': 'o51',
        'objectId': '70EC38C6-4AE4-4E79-BA72-29DA2FE50782',
        'name': '登录ID',
        'code': 'LOGINID',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498995491',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(256CHAR)',
        'length': '256',
        'columnMandatory': '1',
        'codeCamel': 'loginid',
        'codeCamelPlural': 'loginids',
        'codeUnderscore': 'loginid',
        'codeUnderscorePlural': 'loginids',
        'type': 'string'
      },
      {
        'id': 'o52',
        'objectId': '4FCE7185-D489-4DED-AA5F-093A4DBC1112',
        'name': '密码',
        'code': 'PASSWORD',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498995491',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(256CHAR)',
        'length': '256',
        'codeCamel': 'password',
        'codeCamelPlural': 'passwords',
        'codeUnderscore': 'password',
        'codeUnderscorePlural': 'passwords',
        'type': 'string'
      },
      {
        'id': 'o53',
        'objectId': '3A897125-CB02-40F5-9BB1-62A9B06553E0',
        'name': '联系电话',
        'code': 'MOBILE',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498995491',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(16CHAR)',
        'length': '16',
        'codeCamel': 'mobile',
        'codeCamelPlural': 'mobiles',
        'codeUnderscore': 'mobile',
        'codeUnderscorePlural': 'mobiles',
        'type': 'string'
      },
      {
        'id': 'o54',
        'objectId': '48B9C079-3CCA-4886-9543-3AE764998E9A',
        'name': '邮箱',
        'code': 'EMAIL',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498995491',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(256CHAR)',
        'length': '256',
        'codeCamel': 'email',
        'codeCamelPlural': 'emails',
        'codeUnderscore': 'email',
        'codeUnderscorePlural': 'emails',
        'type': 'string'
      },
      {
        'id': 'o55',
        'objectId': '533AB6E8-A3D0-473D-9DE6-0D0CABA6731C',
        'name': '头像',
        'code': 'AVATAR',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498995491',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(1024CHAR)',
        'length': '1024',
        'codeCamel': 'avatar',
        'codeCamelPlural': 'avatars',
        'codeUnderscore': 'avatar',
        'codeUnderscorePlural': 'avatars',
        'type': 'string'
      },
      {
        'id': 'o56',
        'objectId': 'EF44AF1F-F6B9-412F-9FF7-AAECD6B5521A',
        'name': '创建时间',
        'code': 'CREATE_TIME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498995491',
        'modifier': 'xjq',
        'dataType': 'DATE',
        'codeCamel': 'createTime',
        'codeCamelPlural': 'createTimes',
        'codeUnderscore': 'create_time',
        'codeUnderscorePlural': 'create_times',
        'type': 'datetime'
      },
      {
        'id': 'o57',
        'objectId': 'CD1BC772-356B-4D14-A40E-28F115F95EEC',
        'name': '更新时间',
        'code': 'LAST_UPDATE_TIME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498995491',
        'modifier': 'xjq',
        'dataType': 'DATE',
        'codeCamel': 'lastUpdateTime',
        'codeCamelPlural': 'lastUpdateTimes',
        'codeUnderscore': 'last_update_time',
        'codeUnderscorePlural': 'last_update_times',
        'type': 'datetime'
      },
      {
        'id': 'o58',
        'objectId': '297D03AE-459D-4991-A459-3449FE893EEB',
        'name': '最后登录时间',
        'code': 'LAST_LOGIN_TIME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498995491',
        'modifier': 'xjq',
        'dataType': 'DATE',
        'codeCamel': 'lastLoginTime',
        'codeCamelPlural': 'lastLoginTimes',
        'codeUnderscore': 'last_login_time',
        'codeUnderscorePlural': 'last_login_times',
        'type': 'datetime'
      },
      {
        'id': 'o59',
        'objectId': '6767F0FE-6C49-46F3-919E-D854C21FCA52',
        'name': '安全级别',
        'code': 'SECURITY_LEVEL',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498995491',
        'modifier': 'xjq',
        'dataType': 'NUMBER(11,0)',
        'length': '11',
        'codeCamel': 'securityLevel',
        'codeCamelPlural': 'securityLevels',
        'codeUnderscore': 'security_level',
        'codeUnderscorePlural': 'security_levels',
        'type': 'number'
      },
      {
        'id': 'o60',
        'objectId': 'C4BF570D-C8FC-4B72-919C-78DB3D790171',
        'name': '类型',
        'code': 'TYPE',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498995491',
        'modifier': 'xjq',
        'comment': '1:企业，2：代理商',
        'dataType': 'NUMBER(11,0)',
        'length': '11',
        'codeCamel': 'type',
        'codeCamelPlural': 'types',
        'codeUnderscore': 'type',
        'codeUnderscorePlural': 'types',
        'type': 'number'
      }
    ]
  },
  'AuthToken': {
    'model': 'AuthToken',
    'modelPlural': 'AuthTokens',
    'modelCamel': 'authToken',
    'modelCamelPlural': 'authTokens',
    'modelUnderscore': 'auth_token',
    'modelUnderscorePlural': 'auth_tokens',
    'columns': [
      {
        'id': 'o64',
        'objectId': 'D199FEE0-F7B9-438D-BF2B-6D098DFCBE36',
        'name': '用户ID',
        'code': 'USER_ID',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498998622',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(128CHAR)',
        'length': '128',
        'codeCamel': 'userId',
        'codeCamelPlural': 'userIds',
        'codeUnderscore': 'user_id',
        'codeUnderscorePlural': 'user_ids',
        'type': 'string'
      },
      {
        'id': 'o65',
        'objectId': '3643827C-19B0-42F1-A8A6-D492166CFF0B',
        'name': '令牌',
        'code': 'TOKEN',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498996918',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(32CHAR)',
        'length': '32',
        'codeCamel': 'token',
        'codeCamelPlural': 'tokens',
        'codeUnderscore': 'token',
        'codeUnderscorePlural': 'tokens',
        'type': 'string'
      },
      {
        'id': 'o66',
        'objectId': 'BD3D63C8-3964-44F3-8DFD-0D8CA0723078',
        'name': '创建时间',
        'code': 'CREATE_TIME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498996918',
        'modifier': 'xjq',
        'dataType': 'DATE',
        'codeCamel': 'createTime',
        'codeCamelPlural': 'createTimes',
        'codeUnderscore': 'create_time',
        'codeUnderscorePlural': 'create_times',
        'type': 'datetime'
      },
      {
        'id': 'o67',
        'objectId': '8618AF1F-B14F-4D7F-9730-15863F5312FB',
        'name': '有效时间',
        'code': 'VALID_TIME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498996918',
        'modifier': 'xjq',
        'dataType': 'DATE',
        'codeCamel': 'validTime',
        'codeCamelPlural': 'validTimes',
        'codeUnderscore': 'valid_time',
        'codeUnderscorePlural': 'valid_times',
        'type': 'datetime'
      }
    ]
  },
  'DataAuthority': {
    'model': 'DataAuthority',
    'modelPlural': 'DataAuthorities',
    'modelCamel': 'dataAuthority',
    'modelCamelPlural': 'dataAuthorities',
    'modelUnderscore': 'data_authority',
    'modelUnderscorePlural': 'data_authorities',
    'columns': [
      {
        'id': 'o70',
        'objectId': 'FCC70779-9B7A-4916-A1B7-0F504FFCF0D5',
        'name': '角色ID',
        'code': 'ROLE_ID',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498998676',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(128BYTE)',
        'length': '128',
        'codeCamel': 'roleId',
        'codeCamelPlural': 'roleIds',
        'codeUnderscore': 'role_id',
        'codeUnderscorePlural': 'role_ids',
        'type': 'string'
      },
      {
        'id': 'o71',
        'objectId': '9609F993-E5EB-4360-B61F-5C532FCB94B9',
        'name': '部门范围',
        'code': 'DEPARTMENT_RANGE',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498996596',
        'modifier': 'xjq',
        'dataType': 'NUMBER',
        'codeCamel': 'departmentRange',
        'codeCamelPlural': 'departmentRanges',
        'codeUnderscore': 'department_range',
        'codeUnderscorePlural': 'department_ranges',
        'type': 'number'
      },
      {
        'id': 'o72',
        'objectId': '340A2AC1-E88B-4F35-A486-A724ABA91450',
        'name': '业务场景定义ID',
        'code': 'BUSINESS_SCENE_DEFINITION_ID',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498996596',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(32BYTE)',
        'length': '32',
        'codeCamel': 'businessSceneDefinitionId',
        'codeCamelPlural': 'businessSceneDefinitionIds',
        'codeUnderscore': 'business_scene_definition_id',
        'codeUnderscorePlural': 'business_scene_definition_ids',
        'type': 'string'
      },
      {
        'id': 'o73',
        'objectId': 'DDB3D979-F6D6-497D-BC87-8FB31523DB97',
        'name': '操作',
        'code': 'OPERATION',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498996596',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(8BYTE)',
        'length': '8',
        'codeCamel': 'operation',
        'codeCamelPlural': 'operations',
        'codeUnderscore': 'operation',
        'codeUnderscorePlural': 'operations',
        'type': 'string'
      },
      {
        'id': 'o74',
        'objectId': '416078B1-0911-40BC-BF7C-4D2E04508D66',
        'name': '创建时间',
        'code': 'CREATE_TIME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498996596',
        'modifier': 'xjq',
        'dataType': 'DATE',
        'codeCamel': 'createTime',
        'codeCamelPlural': 'createTimes',
        'codeUnderscore': 'create_time',
        'codeUnderscorePlural': 'create_times',
        'type': 'datetime'
      }
    ]
  },
  'DepartmentType': {
    'model': 'DepartmentType',
    'modelPlural': 'DepartmentTypes',
    'modelCamel': 'departmentType',
    'modelCamelPlural': 'departmentTypes',
    'modelUnderscore': 'department_type',
    'modelUnderscorePlural': 'department_types',
    'columns': [
      {
        'id': 'o77',
        'objectId': '41CEC811-EF38-4896-879B-DD7158D7895E',
        'name': '姓名',
        'code': 'NAME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498997187',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(32CHAR)',
        'length': '32',
        'codeCamel': 'name',
        'codeCamelPlural': 'names',
        'codeUnderscore': 'name',
        'codeUnderscorePlural': 'names',
        'type': 'string'
      },
      {
        'id': 'o78',
        'objectId': '0AA415F1-EAF4-4510-A934-1DC6AE681FE1',
        'name': '创建时间',
        'code': 'CREATE_TIME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498997187',
        'modifier': 'xjq',
        'dataType': 'DATE',
        'codeCamel': 'createTime',
        'codeCamelPlural': 'createTimes',
        'codeUnderscore': 'create_time',
        'codeUnderscorePlural': 'create_times',
        'type': 'datetime'
      },
      {
        'id': 'o79',
        'objectId': '03E5C45E-1E68-4954-AF54-59D88BF26868',
        'name': '描述',
        'code': 'DESCRIPTION',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498997187',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(1024CHAR)',
        'length': '1024',
        'codeCamel': 'description',
        'codeCamelPlural': 'descriptions',
        'codeUnderscore': 'description',
        'codeUnderscorePlural': 'descriptions',
        'type': 'string'
      }
    ]
  },
  'Department': {
    'model': 'Department',
    'modelPlural': 'Departments',
    'modelCamel': 'department',
    'modelCamelPlural': 'departments',
    'modelUnderscore': 'department',
    'modelUnderscorePlural': 'departments',
    'columns': [
      {
        'id': 'o83',
        'objectId': 'C6C2B2B5-0C34-42D0-A3B4-CCFCD50A51A7',
        'name': '父部门ID',
        'code': 'PARENT_DEPARTMENT_ID',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498995908',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(128CHAR)',
        'length': '128',
        'codeCamel': 'parentDepartmentId',
        'codeCamelPlural': 'parentDepartmentIds',
        'codeUnderscore': 'parent_department_id',
        'codeUnderscorePlural': 'parent_department_ids',
        'type': 'string'
      },
      {
        'id': 'o84',
        'objectId': 'C4D0454A-7630-4B1F-99F5-3E04438C57F7',
        'name': '编码',
        'code': 'CODE',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498995908',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(128CHAR)',
        'length': '128',
        'codeCamel': 'code',
        'codeCamelPlural': 'codes',
        'codeUnderscore': 'code',
        'codeUnderscorePlural': 'codes',
        'type': 'string'
      },
      {
        'id': 'o85',
        'objectId': 'B94E2986-8E2F-4ECB-9674-AB4A7398F0AA',
        'name': '名字',
        'code': 'NAME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498995908',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(128CHAR)',
        'length': '128',
        'codeCamel': 'name',
        'codeCamelPlural': 'names',
        'codeUnderscore': 'name',
        'codeUnderscorePlural': 'names',
        'type': 'string'
      },
      {
        'id': 'o86',
        'objectId': 'AE5B2A0F-32FC-441F-8583-767097C693BC',
        'name': '描述',
        'code': 'DESCRIPTION',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498995908',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(128CHAR)',
        'length': '128',
        'codeCamel': 'description',
        'codeCamelPlural': 'descriptions',
        'codeUnderscore': 'description',
        'codeUnderscorePlural': 'descriptions',
        'type': 'string'
      },
      {
        'id': 'o87',
        'objectId': '1FBB3116-4DF4-4B1A-B280-391CF2A55716',
        'name': '可看订单',
        'code': 'VIEW_ORDER',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498995908',
        'modifier': 'xjq',
        'dataType': 'NUMBER(11,0)',
        'length': '11',
        'codeCamel': 'viewOrder',
        'codeCamelPlural': 'viewOrders',
        'codeUnderscore': 'view_order',
        'codeUnderscorePlural': 'view_orders',
        'type': 'number'
      },
      {
        'id': 'o88',
        'objectId': '7EEC0FFD-B81A-478D-B86A-57DB2E89E3E7',
        'name': '部门类型ID',
        'code': 'DEPARTMENT_TYPE_ID',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498995908',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(128CHAR)',
        'length': '128',
        'codeCamel': 'departmentTypeId',
        'codeCamelPlural': 'departmentTypeIds',
        'codeUnderscore': 'department_type_id',
        'codeUnderscorePlural': 'department_type_ids',
        'type': 'string'
      },
      {
        'id': 'o89',
        'objectId': '8D40CFC6-4A51-45D8-AF8F-6D6950509AEB',
        'name': '创建时间',
        'code': 'CREATE_TIME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498995908',
        'modifier': 'xjq',
        'dataType': 'DATE',
        'codeCamel': 'createTime',
        'codeCamelPlural': 'createTimes',
        'codeUnderscore': 'create_time',
        'codeUnderscorePlural': 'create_times',
        'type': 'datetime'
      },
      {
        'id': 'o90',
        'objectId': '358DA528-B5CE-41DA-9DAF-894C05CBE361',
        'name': '最后更新时间',
        'code': 'LAST_UPDATE_TIME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498995908',
        'modifier': 'xjq',
        'dataType': 'DATE',
        'codeCamel': 'lastUpdateTime',
        'codeCamelPlural': 'lastUpdateTimes',
        'codeUnderscore': 'last_update_time',
        'codeUnderscorePlural': 'last_update_times',
        'type': 'datetime'
      },
      {
        'id': 'o91',
        'objectId': '52ACC6E1-AAE1-48E9-A16C-C654271A223D',
        'name': '安全等级',
        'code': 'SECURITY_LEVEL',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498995908',
        'modifier': 'xjq',
        'dataType': 'NUMBER(11,0)',
        'length': '11',
        'codeCamel': 'securityLevel',
        'codeCamelPlural': 'securityLevels',
        'codeUnderscore': 'security_level',
        'codeUnderscorePlural': 'security_levels',
        'type': 'number'
      },
      {
        'id': 'o92',
        'objectId': '002BEE34-6D30-4916-A3F1-C59C93E1C09A',
        'name': '简称',
        'code': 'SIMPLE_NAME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498995908',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(128CHAR)',
        'length': '128',
        'codeCamel': 'simpleName',
        'codeCamelPlural': 'simpleNames',
        'codeUnderscore': 'simple_name',
        'codeUnderscorePlural': 'simple_names',
        'type': 'string'
      }
    ]
  },
  'FileAuthority': {
    'model': 'FileAuthority',
    'modelPlural': 'FileAuthorities',
    'modelCamel': 'fileAuthority',
    'modelCamelPlural': 'fileAuthorities',
    'modelUnderscore': 'file_authority',
    'modelUnderscorePlural': 'file_authorities',
    'columns': [
      {
        'id': 'o95',
        'objectId': '8C310FDB-6CF6-4ABA-9550-B1090E6AC4D2',
        'name': '角色ID',
        'code': 'ROLE_ID',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498998494',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(128BYTE)',
        'length': '128',
        'codeCamel': 'roleId',
        'codeCamelPlural': 'roleIds',
        'codeUnderscore': 'role_id',
        'codeUnderscorePlural': 'role_ids',
        'type': 'string'
      },
      {
        'id': 'o96',
        'objectId': 'C8E550B4-F0AC-4CE5-A5B1-87DFF751F70F',
        'name': '操作',
        'code': 'OPERATION',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498997274',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(32BYTE)',
        'length': '32',
        'codeCamel': 'operation',
        'codeCamelPlural': 'operations',
        'codeUnderscore': 'operation',
        'codeUnderscorePlural': 'operations',
        'type': 'string'
      },
      {
        'id': 'o97',
        'objectId': '17F9082B-8544-4543-8F2C-3FE827849B0A',
        'name': '创建时间',
        'code': 'CREATE_TIME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498997274',
        'modifier': 'xjq',
        'dataType': 'DATE',
        'codeCamel': 'createTime',
        'codeCamelPlural': 'createTimes',
        'codeUnderscore': 'create_time',
        'codeUnderscorePlural': 'create_times',
        'type': 'datetime'
      }
    ]
  },
  'FuncAuthority': {
    'model': 'FuncAuthority',
    'modelPlural': 'FuncAuthorities',
    'modelCamel': 'funcAuthority',
    'modelCamelPlural': 'funcAuthorities',
    'modelUnderscore': 'func_authority',
    'modelUnderscorePlural': 'func_authorities',
    'columns': [
      {
        'id': 'o100',
        'objectId': '4D473E6F-2974-4023-93C0-66D08C5F07BC',
        'name': '角色ID',
        'code': 'ROLE_ID',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498996772',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(128CHAR)',
        'length': '128',
        'codeCamel': 'roleId',
        'codeCamelPlural': 'roleIds',
        'codeUnderscore': 'role_id',
        'codeUnderscorePlural': 'role_ids',
        'type': 'string'
      },
      {
        'id': 'o101',
        'objectId': '36EB578C-A723-49DB-B8B9-A0ACB4FCDEB6',
        'name': '业务场景定义ID',
        'code': 'BUSINESS_SCENE_DEFINITION_ID',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498996772',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(128CHAR)',
        'length': '128',
        'codeCamel': 'businessSceneDefinitionId',
        'codeCamelPlural': 'businessSceneDefinitionIds',
        'codeUnderscore': 'business_scene_definition_id',
        'codeUnderscorePlural': 'business_scene_definition_ids',
        'type': 'string'
      },
      {
        'id': 'o102',
        'objectId': '832E27BC-F450-4E1E-9CC9-53F148D55F04',
        'name': '操作',
        'code': 'OPERATION',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498996772',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(8CHAR)',
        'length': '8',
        'codeCamel': 'operation',
        'codeCamelPlural': 'operations',
        'codeUnderscore': 'operation',
        'codeUnderscorePlural': 'operations',
        'type': 'string'
      },
      {
        'id': 'o103',
        'objectId': '97BA43A1-D054-433F-A10E-6B4EF8D6A27E',
        'name': '创建时间',
        'code': 'CREATE_TIME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498996772',
        'modifier': 'xjq',
        'dataType': 'DATE',
        'codeCamel': 'createTime',
        'codeCamelPlural': 'createTimes',
        'codeUnderscore': 'create_time',
        'codeUnderscorePlural': 'create_times',
        'type': 'datetime'
      }
    ]
  },
  'Menu': {
    'model': 'Menu',
    'modelPlural': 'Menus',
    'modelCamel': 'menu',
    'modelCamelPlural': 'menus',
    'modelUnderscore': 'menu',
    'modelUnderscorePlural': 'menus',
    'columns': [
      {
        'id': 'o106',
        'objectId': '89FFCF79-C3B4-4E92-B9DA-12FD253E30DC',
        'name': '名字',
        'code': 'NAME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498996270',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(16CHAR)',
        'length': '16',
        'codeCamel': 'name',
        'codeCamelPlural': 'names',
        'codeUnderscore': 'name',
        'codeUnderscorePlural': 'names',
        'type': 'string'
      },
      {
        'id': 'o107',
        'objectId': '97D1AC79-772A-4BA8-A7F0-F9FE28E3EFCF',
        'name': '菜单图标',
        'code': 'MENU_LOGO',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498996270',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(64CHAR)',
        'length': '64',
        'codeCamel': 'menuLogo',
        'codeCamelPlural': 'menuLogos',
        'codeUnderscore': 'menu_logo',
        'codeUnderscorePlural': 'menu_logos',
        'type': 'string'
      },
      {
        'id': 'o108',
        'objectId': 'CFE7E98D-0924-481C-A240-41543E00AE71',
        'name': '上级菜单ID',
        'code': 'SUPERIOR_MENU_ID',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498996270',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(128CHAR)',
        'length': '128',
        'codeCamel': 'superiorMenuId',
        'codeCamelPlural': 'superiorMenuIds',
        'codeUnderscore': 'superior_menu_id',
        'codeUnderscorePlural': 'superior_menu_ids',
        'type': 'string'
      },
      {
        'id': 'o109',
        'objectId': '693766A6-08EE-4E62-9409-A50A37A9CA36',
        'name': '等级',
        'code': 'RANK',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498996270',
        'modifier': 'xjq',
        'dataType': 'NUMBER(11,0)',
        'length': '11',
        'codeCamel': 'rank',
        'codeCamelPlural': 'ranks',
        'codeUnderscore': 'rank',
        'codeUnderscorePlural': 'ranks',
        'type': 'number'
      },
      {
        'id': 'o110',
        'objectId': 'C9634430-1566-44AE-A6CD-EB7B7F23AF59',
        'name': '创建时间',
        'code': 'CREATE_TIME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498996270',
        'modifier': 'xjq',
        'dataType': 'DATE',
        'codeCamel': 'createTime',
        'codeCamelPlural': 'createTimes',
        'codeUnderscore': 'create_time',
        'codeUnderscorePlural': 'create_times',
        'type': 'datetime'
      },
      {
        'id': 'o111',
        'objectId': 'DDF6CF13-AF8F-47D7-A500-80CADA6CC38E',
        'name': '展示位置',
        'code': 'DISPLAY_POSITION',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498996270',
        'modifier': 'xjq',
        'dataType': 'NUMBER(11,0)',
        'length': '11',
        'codeCamel': 'displayPosition',
        'codeCamelPlural': 'displayPositions',
        'codeUnderscore': 'display_position',
        'codeUnderscorePlural': 'display_positions',
        'type': 'number'
      },
      {
        'id': 'o112',
        'objectId': '0DBEC3D2-6328-4E57-95E8-59A296F67F0D',
        'name': '链接',
        'code': 'LINK',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498996270',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(255BYTE)',
        'length': '255',
        'codeCamel': 'link',
        'codeCamelPlural': 'links',
        'codeUnderscore': 'link',
        'codeUnderscorePlural': 'links',
        'type': 'string'
      },
      {
        'id': 'o113',
        'objectId': 'FB047FD9-385E-4BEC-B77B-A7B7727CD076',
        'name': '类型',
        'code': 'TYPE',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498996270',
        'modifier': 'xjq',
        'dataType': 'NUMBER(11,0)',
        'length': '11',
        'codeCamel': 'type',
        'codeCamelPlural': 'types',
        'codeUnderscore': 'type',
        'codeUnderscorePlural': 'types',
        'type': 'number'
      },
      {
        'id': 'o114',
        'objectId': '469DE55A-0EA7-4DEA-93BE-A17C092D6286',
        'name': '目标ID',
        'code': 'TARGET_ID',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498997755',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(255BYTE)',
        'length': '255',
        'codeCamel': 'targetId',
        'codeCamelPlural': 'targetIds',
        'codeUnderscore': 'target_id',
        'codeUnderscorePlural': 'target_ids',
        'type': 'string'
      },
      {
        'id': 'o115',
        'objectId': 'B4DD2873-4B44-41C0-AC19-DBCF9D516BC4',
        'name': 'APP_URL',
        'code': 'APP_URL',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498990741',
        'modifier': 'hm20160509',
        'dataType': 'VARCHAR2(255BYTE)',
        'length': '255',
        'codeCamel': 'appUrl',
        'codeCamelPlural': 'appUrls',
        'codeUnderscore': 'app_url',
        'codeUnderscorePlural': 'app_urls',
        'type': 'string'
      }
    ]
  },
  'RoleMenu': {
    'model': 'RoleMenu',
    'modelPlural': 'RoleMenus',
    'modelCamel': 'roleMenu',
    'modelCamelPlural': 'roleMenus',
    'modelUnderscore': 'role_menu',
    'modelUnderscorePlural': 'role_menus',
    'columns': [
      {
        'id': 'o118',
        'objectId': '4884CB5B-6822-48A2-BBCD-C82BBE471E3E',
        'name': '角色ID',
        'code': 'ROLE_ID',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498998570',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(120CHAR)',
        'length': '120',
        'codeCamel': 'roleId',
        'codeCamelPlural': 'roleIds',
        'codeUnderscore': 'role_id',
        'codeUnderscorePlural': 'role_ids',
        'type': 'string'
      },
      {
        'id': 'o119',
        'objectId': 'CF06209D-971F-4C92-A8EC-404739931940',
        'name': '菜单ID',
        'code': 'MENU_ID',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498998594',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(120CHAR)',
        'length': '120',
        'codeCamel': 'menuId',
        'codeCamelPlural': 'menuIds',
        'codeUnderscore': 'menu_id',
        'codeUnderscorePlural': 'menu_ids',
        'type': 'string'
      }
    ]
  },
  'Role': {
    'model': 'Role',
    'modelPlural': 'Roles',
    'modelCamel': 'role',
    'modelCamelPlural': 'roles',
    'modelUnderscore': 'role',
    'modelUnderscorePlural': 'roles',
    'columns': [
      {
        'id': 'o121',
        'objectId': 'E9AC3A9C-D43B-4384-A7EE-05E60BF711A7',
        'name': '姓名',
        'code': 'NAME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498997012',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(128CHAR)',
        'length': '128',
        'codeCamel': 'name',
        'codeCamelPlural': 'names',
        'codeUnderscore': 'name',
        'codeUnderscorePlural': 'names',
        'type': 'string'
      },
      {
        'id': 'o122',
        'objectId': 'A99D5EAB-FE49-4D56-94EE-0CAB2FEC3788',
        'name': '描述',
        'code': 'DESCRIPTION',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498997012',
        'modifier': 'xjq',
        'dataType': 'CLOB',
        'codeCamel': 'description',
        'codeCamelPlural': 'descriptions',
        'codeUnderscore': 'description',
        'codeUnderscorePlural': 'descriptions',
        'type': 'string'
      },
      {
        'id': 'o123',
        'objectId': '4B3D418C-C2C3-4785-A68A-C54918DE9160',
        'name': '创建时间',
        'code': 'CREATE_TIME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498997012',
        'modifier': 'xjq',
        'dataType': 'DATE',
        'codeCamel': 'createTime',
        'codeCamelPlural': 'createTimes',
        'codeUnderscore': 'create_time',
        'codeUnderscorePlural': 'create_times',
        'type': 'datetime'
      },
      {
        'id': 'o124',
        'objectId': '06523D0E-DAF6-4172-AF06-B3B6240EB8CB',
        'name': '等级',
        'code': 'RANK',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498997012',
        'modifier': 'xjq',
        'dataType': 'NUMBER',
        'codeCamel': 'rank',
        'codeCamelPlural': 'ranks',
        'codeUnderscore': 'rank',
        'codeUnderscorePlural': 'ranks',
        'type': 'number'
      }
    ]
  },
  'UserRole': {
    'model': 'UserRole',
    'modelPlural': 'UserRoles',
    'modelCamel': 'userRole',
    'modelCamelPlural': 'userRoles',
    'modelUnderscore': 'user_role',
    'modelUnderscorePlural': 'user_roles',
    'columns': [
      {
        'id': 'o127',
        'objectId': '41CDBCDD-8B5A-4718-BAF3-D1D4C06E08A3',
        'name': '角色ID',
        'code': 'ROLE_ID',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498998450',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(128CHAR)',
        'length': '128',
        'columnMandatory': '1',
        'codeCamel': 'roleId',
        'codeCamelPlural': 'roleIds',
        'codeUnderscore': 'role_id',
        'codeUnderscorePlural': 'role_ids',
        'type': 'string'
      },
      {
        'id': 'o128',
        'objectId': 'FC441BA0-581A-4BE7-AB70-B5E27F21070E',
        'name': '用户ID',
        'code': 'USER_ID',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498998759',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(128CHAR)',
        'length': '128',
        'columnMandatory': '1',
        'codeCamel': 'userId',
        'codeCamelPlural': 'userIds',
        'codeUnderscore': 'user_id',
        'codeUnderscorePlural': 'user_ids',
        'type': 'string'
      },
      {
        'id': 'o129',
        'objectId': '1AFC311D-F23B-43BE-846D-6E651F734FF2',
        'name': '等级',
        'code': 'RANK',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498997425',
        'modifier': 'xjq',
        'dataType': 'NUMBER(11,0)',
        'length': '11',
        'codeCamel': 'rank',
        'codeCamelPlural': 'ranks',
        'codeUnderscore': 'rank',
        'codeUnderscorePlural': 'ranks',
        'type': 'number'
      }
    ]
  },
  'Company': {
    'model': 'Company',
    'modelPlural': 'Companies',
    'modelCamel': 'company',
    'modelCamelPlural': 'companies',
    'modelUnderscore': 'company',
    'modelUnderscorePlural': 'companies',
    'columns': [
      {
        'id': 'o131',
        'objectId': '38CEACFE-14A7-4E3F-A1FE-30FB4318B0AB',
        'name': '公司名称',
        'code': 'NAME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498997305',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(128CHAR)',
        'length': '128',
        'codeCamel': 'name',
        'codeCamelPlural': 'names',
        'codeUnderscore': 'name',
        'codeUnderscorePlural': 'names',
        'type': 'string'
      }
    ]
  },
  'SimpleDataAuthority': {
    'model': 'SimpleDataAuthority',
    'modelPlural': 'SimpleDataAuthorities',
    'modelCamel': 'simpleDataAuthority',
    'modelCamelPlural': 'simpleDataAuthorities',
    'modelUnderscore': 'simple_data_authority',
    'modelUnderscorePlural': 'simple_data_authorities',
    'columns': [
      {
        'id': 'o134',
        'objectId': 'EB4FF879-EFE8-4A1E-BA52-0D242638D20A',
        'name': '角色ID',
        'code': 'ROLE_ID',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498998529',
        'modifier': 'xjq',
        'dataType': 'VARCHAR2(128BYTE)',
        'length': '128',
        'codeCamel': 'roleId',
        'codeCamelPlural': 'roleIds',
        'codeUnderscore': 'role_id',
        'codeUnderscorePlural': 'role_ids',
        'type': 'string'
      },
      {
        'id': 'o135',
        'objectId': '6AE6100C-E4B7-4E65-BC44-F8CBFC9F66A4',
        'name': '部门范围',
        'code': 'DEPARTMENT_RANGE',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498997115',
        'modifier': 'xjq',
        'dataType': 'NUMBER(11,0)',
        'length': '11',
        'codeCamel': 'departmentRange',
        'codeCamelPlural': 'departmentRanges',
        'codeUnderscore': 'department_range',
        'codeUnderscorePlural': 'department_ranges',
        'type': 'number'
      },
      {
        'id': 'o136',
        'objectId': '5B5B9235-DF70-48ED-A19E-9A93CC195FF8',
        'name': '创建时间',
        'code': 'CREATE_TIME',
        'creationDate': '1498990741',
        'creator': 'hm20160509',
        'modificationDate': '1498997115',
        'modifier': 'xjq',
        'dataType': 'DATE',
        'codeCamel': 'createTime',
        'codeCamelPlural': 'createTimes',
        'codeUnderscore': 'create_time',
        'codeUnderscorePlural': 'create_times',
        'type': 'datetime'
      }
    ]
  }
}

exports = module.exports = ModelSchema
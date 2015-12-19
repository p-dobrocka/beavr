'use strict';
module.exports = function (sequelize, DataTypes) {
  var log = require('logfilename')(__filename);

  var Permission = sequelize.define('Permission', {
    name: DataTypes.TEXT,
    resource: DataTypes.TEXT,
    description: DataTypes.TEXT,
    POST: DataTypes.BOOLEAN,
    GET: DataTypes.BOOLEAN,
    PUT: DataTypes.BOOLEAN,
    PATCH: DataTypes.BOOLEAN,
    DELETE: DataTypes.BOOLEAN
  }, {
    tableName: "permissions",
    classMethods: {
      associate: function associate(models) {
        Permission.belongsToMany(models.Group, { through: models.GroupPermission, foreignKey: "permission_id" });
      },
      seedDefault: seedDefault,
      findByName: findByName
    }
  });

  function seedDefault() {
    var permissionsJson = require('./fixtures/permissions.json');
    log.debug('seedDefault: ', JSON.stringify(permissionsJson, null, 4));
    return Permission.bulkCreate(permissionsJson);
  }

  function findByName(permissionName) {
    return Permission.find({ where: { name: permissionName } });
  }
  return Permission;
};
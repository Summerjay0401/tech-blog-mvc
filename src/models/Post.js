const { Model, DataTypes } = require("sequelize");

const conn = require("../config/connection");

class Post extends Model {
}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING(10000),
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id",
            },
        },
    },
    {
        sequelize: conn,
        freezeTableName: true,
        underscored: true,
        modelName: "post",
    }
);

module.exports = Post;

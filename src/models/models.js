const {Sequelize,DataTypes} = require('sequelize')
const sequelize = new Sequelize('postgres://ykoibwrg:CYBfHOACRvRxmAB0P-KMR87qVtyFi8Pe@abul.db.elephantsql.com/ykoibwrg')

const Bank = sequelize.define('bank',{
    branch:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    bank_customer_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    tieto_customer_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    head_customer_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    cur_acc:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        // autoIncrement:true
    }
})

module.exports = {sequelize,Bank}
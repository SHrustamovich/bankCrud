const {Bank} = require('../models/models')
module.exports = {
    GET:async(_,res) => {
        try{
           res.send(await Bank.findAll())
        }catch(err){
         res.sendStatus(500)
        }
    },
    POST:async(req,res) => {
        try{
        const {branch,bank_customer_id,tieto_customer_id,head_customer_id,cur_acc,id} = req.body
        const NewBank = await Bank.create({branch,bank_customer_id,tieto_customer_id,head_customer_id,cur_acc,id})
        res.send(NewBank)
        }catch(err){
            res.sendStatus(500)
        }
    },
    PUT:async(req,res) => {
        try{
             const {branch,bank_customer_id,tieto_customer_id,head_customer_id,cur_acc,id} = req.body
             const UpdateBank = await Bank.update({branch,bank_customer_id,tieto_customer_id,head_customer_id,cur_acc}, {
                where:{
                    id:id
                }
             })
             res.send(UpdateBank)
        }catch(err){
            res.sendStatus(500)
        }
    },
    DELETE:async(req,res) => {
        try{
          const {id} = req.body
          const DeleteBank = await Bank.destroy({
            where:{
                id
            }
        })
        console.log(DeleteBank);
        res.send("ok")
        }catch(err){
            res.sendStatus(500)
        }
    }
}
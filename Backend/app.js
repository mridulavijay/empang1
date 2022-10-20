const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const Employeedata=require('./model/EmployeeData');

app.get('/employeelist',function(req,res){
Employeedata.find()
.then(function(data){
    res.send(data);
})
})
app.post('/employeelist',function(req,res){
    var newdata={
        name:req.body.name,
        position:req.body.position,
        location:req.body.location,
        salary:req.body.salary
    }
    var Employee=Employeedata(newdata);
    Employee.save();

    Employeedata.find()
.then(function(data){
    res.send(data);
})
})
app.delete('/employeelist/:id',(req,res)=>{
let id=req.params.id;
Employeedata.findByIdAndDelete({"_id":id}).then(()=>{
    res.send();
})
})
app.listen(3000);
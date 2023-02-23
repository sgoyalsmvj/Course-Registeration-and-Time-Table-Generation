const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const  Student = require('./models/Student');
const  Faculty  = require('./models/faculty');
const  Slots  = require('./models/Slots');
const  Feedback  = require('./models/Feedback');
const  Admin  = require('./models/Admin');
const { Course } = require('./models/course');
const  Elective  = require('./models/elective');
const Preference = require('./models/Preference');
const { intializingPassport } = require('./passportConfig');
const session  = require('express-session');
const e = require('express');


main().catch(err => console.log(err));
async function main() {

    await mongoose.connect('mongodb://localhost:27017/lnmiit');

    console.log('connected to db');
}
intializingPassport(passport);



const sessionConfig = {
    secret:'holllla',
    resave:false,
    saveUninitialized:true,
    cookie:{
        httpOnly: true,
        expires: Date.now() + 1000*60*60*24*7,
        user:"",
        status:0,
        maxAge:1000*60*60*24*7
    }
}
app.use(session(sessionConfig));





app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))


app.use(passport.initialize());
app.use(passport.session());


//routes 

//LOGIN
app.get('/login', async (req, res) => {
    const slot = await Slots.findOne();
    var newslot;
    if(slot){
        newslot=1;
    }
    res.render('Login',{newslot});
})
app.post('/login', async (req, res) => {
    console.log(req.body.login);
    const faculty =  await Faculty.findOne({ username: req.body.login.username });
    const admin =  await Admin.findOne({ username: req.body.login.username });
    const student = await Student.findOne({ username: req.body.login.username });
    console.log(admin);
    if(student){
        if (student.username===req.body.login.username) {
            if (student.password === req.body.login.password) {
                req.session.user = student.rollno;
                req.session.status=1;
                console.log(req.session)
                res.redirect('/Homepagestudent');
        
            }
            else {
                res.redirect('Login')
            }
        }
    }
    
    else if (faculty) {
        if (faculty.password === req.body.login.password) {
            req.session.user = faculty.username;
            req.session.status=1;
            res.redirect('/Homepagefaculty')
        }
        else {
            res.redirect('Login')
        }
    }
    else if (admin) {
        if (admin.password === req.body.login.password) {
                req.session.user = admin.username;
                req.session.status=1;
                console.log(req.session)
            res.redirect('/admin')
        }
        else {
            res.redirect('login')
        }
    }else{
        res.redirect('login');
    }
    // res.redirect('login');
})

app.get('/Homepagestudent', async (req,res)=>{
    if(req.session.status===1){
        const student = await Student.findOne({ username: req.session.user});
    console.log(student);
    const slot = await Slots.findOne({sem : student.sem,branch:student.branch});
    var sbatch = "20"+student.rollno.substr(0,2);
    var fslot;
    var avail;
    if(slot){
        
    if(sbatch === slot.batch){
        fslot = slot;
        
    }
    
    }
    var m = new Date();
    var fslot = new Slots();
    var avail;
    if(slot){
        
    if(sbatch === slot.batch){
        fslot = slot;
        
    }
    
    }
    var d = new Date(fslot.date);
    // console.log(dates.compare(a,b));
    console.log(m>d);
    console.log(m<d);

    var avail=0;
    if(m>=d){
        avail=1;
    }
    
    res.render('Homepagestudent',{student,fslot,avail});
    }
    else{
    res.redirect('/login');

    }
    
})

app.get('/Homepagefaculty', async (req,res)=>{
    if(req.session.status===1){
        const t = req.session.user;
    console.log(t);
    const student = await Faculty.findOne({ username:t});
    // console.log(student.img);
   
    res.render('Homepagefaculty',{student});
    }else{
        res.redirect("/login");
    }
    
})

app.get('/givefacultyfeedback',async (req,res)=>{
    const student = await Faculty.findOne({username:req.session.user});
    res.render("facultyFeedback",{student});
})


app.get('/admin', async (req,res)=>{
    const admin = await Admin.findOne({ username: req.session.user,});
    // console.log(student);
    res.render('Admin',{admin});
})

app.get('/changeElectivesadmin',async (req,res)=>{
    const elec = await Elective.find();
    console.log(elec);
    res.render('adminElectives',{elec});
})

app.get('/')

app.get('/courseRegisteration', async (req,res)=>{

    if(req.session.status===1){
    const allCoreCourse = await Course.find({});
    const allElecCourse = await Elective.find({});
    const student = await Student.findOne({ username: req.session.user});
    var coreCourse=[];
    var elecCourse=[];
    // if()
    const tempBranch = student.branch + "";
    const tempSem = student.sem + "";
    // const t = "abcsdedsz";
    // console.log(t.slice(,1));
    for( c of allCoreCourse){
        if((tempBranch === c.courseid.slice(0,1)) ){
            if(tempSem === c.courseid.charAt((c.courseid.length)-1)){
                coreCourse.push(c);

            }
        }
    }
    var totelec=0;
    console.log(allElecCourse);
    for( c of allElecCourse){
        if((tempBranch === c.courseid.slice(0,1)) ){
            if(tempSem === c.courseid.charAt((c.courseid.length)-1)){
                elecCourse.push(c);
                totelec++;
            }
        }
    }
    const slot = await Slots.findOne({sem : student.sem,branch:student.branch});
    var sbatch = "20"+student.rollno.substr(0,2);
    var m = new Date();
    var fslot = new Slots();
    var avail;
    if(slot){
        
    if(sbatch === slot.batch){
        fslot = slot;
        
    }
    
    }
    var d = new Date(fslot.date);
    // console.log(dates.compare(a,b));
    console.log(m>d);
    console.log(m<d);

    var avail=0;
    if(m>=d){
        avail=1;
    }
    console.log(m);
    console.log(fslot.date);

    res.render('CourseRegister',{coreCourse,elecCourse,totelec,fslot,avail});
    }else{
        res.redirect("/login");
    }
})

app.post("/submitCourse",async (req,res)=>{
    var p = new Preference();
    p.order = req.body.preference;
    p.student = req.session.user;
    const s = await Student.findOne({ username: req.session.user });
    p.sem = s.sem;
    const student = await Student.findOne({ username: req.session.user});

    const slot = await Slots.findOne({sem : student.sem,branch:student.branch});
    var sbatch = "20"+student.rollno.substr(0,2);
    var fslot;
    var avail;
    if(slot){
        
    if(sbatch === slot.batch){
        fslot = slot;
        
    }
    
    }
    console.log(fslot);
    p.slot = fslot._id;


    const allCoreCourse = await Course.find({});
    const allElecCourse = await Elective.find({});
    // const student = await Student.findOne({ username: req.session.user});
    var coreCourse=[];
    var elecCourse=[];
    // if()
    const tempBranch = student.branch + "";
    const tempSem = student.sem + "";
    // const t = "abcsdedsz";
    // console.log(t.slice(,1));
    for( c of allCoreCourse){
        if((tempBranch === c.courseid.slice(0,1)) ){
            if(tempSem === c.courseid.charAt((c.courseid.length)-1)){
                coreCourse.push(c);

            }
        }
    }
    var totelec=0;
    console.log(allElecCourse);
    for( c of allElecCourse){
        if((tempBranch === c.courseid.slice(0,1)) ){
            if(tempSem === c.courseid.charAt((c.courseid.length)-1)){
                elecCourse.push(c);
                totelec++;
            }
        }
    }

    await p.save();
    res.render('report',{p,coreCourse,elecCourse});
})

app.get("/givestudentfeedback",async (req,res)=>{
    // const s = await Student.findOne({ username: req.session.user });
    if(req.session.status===1){
    const allCoreCourse = await Course.find({});
    const allElecCourse = await Elective.find({});
    const student = await Student.findOne({ username: req.session.user});
    var course=[];
    // if()
    const tempBranch = student.branch + "";
    const tempSem = student.sem + "";
    // const t = "abcsdedsz";
    // console.log(t.slice(,1));
    for( c of allCoreCourse){
        if((tempBranch === c.courseid.slice(0,1)) ){
            if(tempSem === c.courseid.charAt((c.courseid.length)-1)){
                course.push(c);

            }
        }
    }
    var totelec=0;
    console.log(allElecCourse);
    for( c of allElecCourse){
        if((tempBranch === c.courseid.slice(0,1)) ){
            if(tempSem === c.courseid.charAt((c.courseid.length)-1)){
                course.push(c);
            }
        }
    }
    
    
    res.render("Feedback.ejs",{course,student});
    }else{
        res.redirect("/login");
    }
});

app.get("/logout",(req,res)=>{
    req.session.user="";
    req.session.status =0;
    res.redirect("/login");

})

app.post("/getTable",async(req,res)=>{
    console.log(req.body);
    var sem = req.body.sem;
    var branch = req.body.branch;
    console.log(sem,branch);
    if(sem==3){
        sem=1;
    }else if(sem==4){
        sum=2;
    }
    else if(sem==7){
        sem=5;
    }else if(sem==8){
        sem=6;
    }
    console.log(sem,branch);
    res.render("index",{sem,branch});
})

app.get("/viewfacultyfeedback",async(req,res)=>{
    const fac = await Faculty.findOne({ username: req.session.user});
    // var t = fac;
    var feedback=[];
    console.log(fac);
    for(i of fac.coursesTeaching){
        console.log(i);
         const t = await Feedback.find({to:i});
         for(j of t){
            feedback.push(j);
         }
    }
    res.render("ViewFeedback.ejs",{feedback});
})
app.get("/registeredCourses",async(req,res)=>{
    const student = await Student.findOne({username : req.session.user});
    var t = student.courseRegistered;
    res.render("RegisteredCourses",{t});
})
app.post("/submitfeedback",async(req,res)=>{
    console.log(req.body);
    var t = new Feedback();
    t.from = req.body.from;
    t.to = req.body.to;
    t.rate = req.body.rate;
    t.comment = req.body.comment;
    await t.save();
    res.redirect("/Homepagestudent");
})

app.get("/setSlots",async(req,res)=>{
    
    res.render("setSlots");
})



app.get("/courseRegisterationadmin",async(req,res)=>{
    const slots = await Slots.find();
    res.render("courseRegisterationadmin",{slots});
})

app.post("/setSlots",async(req,res)=>{
    var t = new Slots(req.body.slot);
    await t.save();
    res.redirect("/admin");
})
function read_prop(obj, prop) {
    prop = "'"+prop+"'";
    return obj[prop];
}
app.post("/genReport",async(req,res)=>{
    var t = req.body.slot;
    const pre = await Preference.find({slot:t});
    const slot = await Slots.findOne({_id:t});
    // console.log(slot);
    const sem = slot.sem;
    const branch = slot.branch;
    console.log(sem,branch);

    const elec = await Elective.find({branch:branch,semester:sem});
    console.log(elec.length);
    
    // a[1]="22";
    // console.log(a[1]);
    
    
    var a=[];
    
    // console.log(a);
    for(p of pre){
        var t2 = await Student.findOne({username:p.student});
        
            // console.log(t2);
            // console.log("///////////")
            var newelec = t2.courseRegistered;
            var count=0
            // console.log(t2.courseRegistered);
            // console.log(st);
            for(et of elec){
                // console.log("courseId", et.courseid);
    
                a[p.order[0][et.courseid.toString()]]=et.courseid;
                // console.log(read_prop(p.order[0],et.courseid));
                // await Student.findOneAndUpdate({_id:t2._id},{courseRegistered:newelec});
                // a[(p.order.$(e.courseid))] = e.courseid;
            }
        
        console.log(a);
        console.log("///////////")
        var newelec = t2.courseRegistered;
        var count=0
        console.log(t2.courseRegistered);
        // console.log(st);
        // for(et of elec){
            // console.log("courseId", et.courseid);

            // a[p.order[0][et.courseid.toString()]]=et.courseid;
            // console.log(read_prop(p.order[0],et.courseid));
            for(let i=0;i<=elec.length;i++){
                for(el of elec){
                    if((a[i] === el.courseid)&&count<2){
                        if(el.seats>=0){
                            newelec.push(el.courseid);
                            count++;
                            console.log("ALOT");
                        }
                    }
                }
            }
            console.log(newelec);
            await Student.findOneAndUpdate({_id:t2._id},{courseRegistered:newelec});
            // a[(p.order.$(e.courseid))] = e.courseid;
        // }
    }
    // console.log(t2);
    await Slots.remove({ _id: t });
   
    res.redirect("/admin");
})

app.get("/viewadminfeed",(req,res)=>{
    res.render("adminfeedback");
})

app.listen(5000, () => {
    console.log('on port 5000')
})
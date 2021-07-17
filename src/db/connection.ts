import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI ?? '' ,  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('connection done');
})
.catch(() => {
    console.log('no connection');
});
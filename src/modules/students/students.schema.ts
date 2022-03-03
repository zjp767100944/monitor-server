import * as mongoose from 'mongoose';

export const StudentsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'username can not be expty'],
  },

  password: {
    type: String,
    required: [true, 'password can not be empty'],
  },

  age: {
    type: String,
    // required: [true, 'age can not be expty'],
    min: 0,
    max: 150,
  },

  sex: {
    type: String,
    default: 'man',
    enum: ['man', 'women'],
    // required: [true, 'sex can not be expty'],
  },
});

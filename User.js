import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
	street: String,
	city: String,
});

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		min: 1,
		max: 100,
		// validate: {
		// 	validator: (v) => v % 2 === 0,
		// 	messages: (props) => `${props.value} is not an even number`,
		// },
	},
	gender: String,
	email: {
		type: String,
		minLength: 10,
		required: true,
		// lowercase: true,
	},
	createAt: {
		type: Date,
		// Can not change
		immuatable: true,
		// Every single time create a new record
		// Check if no value for createAt, user newest date
		default: () => Date.now(),
	},
	updateAt: {
		type: Date,
		default: () => Date.now(),
	},
	bestFriend: mongoose.SchemaTypes.ObjectId,
	hobbies: [String],
	address: addressSchema,
});

const User = mongoose.model('User', userSchema);

export default User;

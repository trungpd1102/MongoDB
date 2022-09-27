import mongoose from 'mongoose';
import User from './User.js';

mongoose.connect(
	'mongodb://localhost/testDb',
	() => {
		console.log('Connected');
	},
	(e) => console.error(e)
);

// const user = new User({
// 	name: 'Trung',
// 	age: 27,
// });

// user
// 	.save()
// 	.then(() => console.log('User saved successfully'))
// 	.catch((e) => console.error(e));

async function addUser() {
	// const user = new User({
	// 	name: 'Trung',
	// 	age: 27,
	// });
	// await user.save();
	try {
		const user = await User.create({
			name: 'Trung',
			age: 27,
			gender: 'male',
			hobbies: ['Calisthenic', 'Cooking', 'Coding'],
			address: {
				street: 'Tran Huu Duc',
				city: 'Hanoi',
			},
		});
		console.log(user);
	} catch (error) {
		console.error(error );
	}
}

// addUser();

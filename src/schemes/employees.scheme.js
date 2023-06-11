import Joi from 'joi';

const dni = Joi.string().min(10).max(30).messages({
  'string.base': 'The dni must be a string with numbers',
  'string.min': 'The dni must be larger than or equal to 10',
  'string.max': 'The dni must be less than or equal to 30'
});

const first_name = Joi.string().min(3).max(50).messages({
  'string.base': 'The first_name must be a string',
  'string.min': 'The first_name must be larger than or equal to 3',
  'string.max': 'The first_name must be less than or equal to 50'
});

const last_name = Joi.string().min(5).max(50).messages({
  'string.base': 'The last_name must be a string',
  'string.min': 'The last_name must be larger than or equal to 5',
  'string.max': 'The last_name must be less than or equal to 50'
});

const date_of_birth = Joi.string().min(10).max(10).messages({
  'string.base': 'The date_of_birth must be a string',
  'string.min': 'The date_of_birth must be larger than or equal to 10',
  'string.max': 'The date_of_birth must be less than or equal to 10'
});

const gender = Joi.string().min(1).max(2).messages({
  'string.base': 'The gender must be a string',
  'string.min': 'The gender must be larger than or equal to 1',
  'string.max': 'The gender must be less than or equal to 2'
});

const nationality = Joi.string().min(1).max(3).messages({
  'string.base': 'The nationality must be a string',
  'string.min': 'The nationality must be larger than or equal to 1',
  'string.max': 'The nationality must be less than or equal to 3'
});

const position = Joi.string().min(10).max(20).messages({
  'string.base': 'The position must be a string',
  'string.min': 'The position must be larger than or equal to 10',
  'string.max': 'The position must be less than or equal to 50'
});

const telephone = Joi.string().min(10).max(30).messages({
  'string.base': 'The telephone must be a string',
  'string.min': 'The telephone must be larger than or equal to 10',
  'string.max': 'The telephone must be less than or equal to 30'
});

const email = Joi.string().email().min(10).max(50).messages({
  'string.base': 'The email must be an email',
  'string.min': 'The email must be larger than or equal to 10',
  'string.max': 'The email must be less than or equal to 50'
});

const password = Joi.string().min(5).max(20).messages({
  'string.base': 'The password must be a string or an alphanum',
  'string.min': 'The password must be larger than or equal to 5',
  'string.max': 'The password must be less than or equal to 100'
});


export const employeeCreateScheme = Joi.object({
  dni: dni,
  first_name: first_name.required(),
  last_name: last_name.required(),
  date_of_birth: date_of_birth.required(),
  gender: gender.required(),
  nationality: nationality.required(),
  position: position.optional(),
  telephone: telephone.optional(),
  email: email.optional(),
  password: password.optional()
});

export const employeeUpdateScheme = Joi.object({
  dni: dni,
  first_name: first_name,
  last_name: last_name,
  date_of_birth: date_of_birth,
  gender: gender,
  nationality: nationality,
  position: position,
  telephone: telephone,
  email: email,
  password: password
});

import Joi from 'joi';

const orderSchema = Joi.array().items(Joi.number().integer()).min(1).required()
  .messages({
    'any.required': '"productsIds" is required',
    'array.base': '"productsIds" must be an array',
    'array.min': '"productsIds" must include only numbers',
    'number.base': '"productsIds" must include only numbers',
  });

export default orderSchema;
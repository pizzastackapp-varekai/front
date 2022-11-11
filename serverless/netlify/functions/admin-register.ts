import { Handler } from '@netlify/functions'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import { AdminRegisterInput } from '../common/sdk'
import { api } from '../common/api'

const handler: Handler = async (event, context) => {
	const { body, headers } = event
	if (
		!headers['x-pizzastack-secret-key'] ||
		headers['x-pizzastack-secret-key'] !== 'mypizzastacksecretkey'
	) {
		return {
			statusCode: 403,
			body: JSON.stringify({
				message: 'x-pizzastack-secret-key is missing or value is invalid',
			}),
		}
	}

	const input: AdminRegisterInput = JSON.parse(body!).input.admin

	const password = crypto
		.pbkdf2Sync(input.password, 'myadminsecretkey', 1000, 64, 'sha512')
		.toString('hex')

	const data = await api.InsertAdmin(
		{
			username: input.username,
			password,
		},
		{
			'x-hasura-admin-secret': 'mypizzastacksecretkey',
		}
	)

	const accessToken = jwt.sign(
		{
			'https://hasura.io/jwt/claims': {
				'x-hasura-allowed-roles': ['admin'],
				'x-hasura-default-role': 'admin',
				'x-hasura-user-id': data.insert_admin_one?.id,
			},
		},
		'myadminsecretkey'
	)

	return {
		statusCode: 200,
		body: JSON.stringify({ accessToken }),
	}
}

export { handler }

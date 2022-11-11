import crypto from 'crypto'

export const hashPassword = (password: string): string => {
	return crypto
		.pbkdf2Sync(password, 'myadminsecretkey', 1000, 64, 'sha512')
		.toString('hex')
}

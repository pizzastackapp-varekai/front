import { CssBaseline } from '@mui/material'
import { Fragment, useEffect, useState } from 'react'
import { Admin, DataProvider, Loading, Resource } from 'react-admin'
import buildHasuraProvider from 'ra-data-hasura'
import { MenuList } from './modules/menu/components/menu-list/menu-list.component'
import { MenuEdit } from './modules/menu/components/menu-edit/menu-edit.component'
import { MenuCreate } from './modules/menu/components/menu-create/menu-create.component'

export const App = () => {
	const [dataProvider, setDataProvider] =
		useState<DataProvider<string> | null>(null)

	useEffect(() => {
		const buildDataProvider = async () => {
			const db = await buildHasuraProvider({
				clientOptions: {
					uri: 'http://localhost:8080/v1/graphql',
				},
			})
			setDataProvider(db)
		}
		buildDataProvider()
	}, [])

	if (!dataProvider) {
		return <Loading />
	}
	return (
		<Fragment>
			<CssBaseline />
			<Admin dataProvider={dataProvider}>
				<Resource
					name="menu"
					list={MenuList}
					edit={MenuEdit}
					create={MenuCreate}
				/>
			</Admin>
		</Fragment>
	)
}

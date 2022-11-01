import { FooterLink } from '../footer-link/footer-link.component'

export const Footer = () => {
	return (
		<div className="bg-gray-900 pt-12 px-12 pb-8">
			<div className="mb-4">
				<span className="uppercase font-bold text-sm text-zinc-500">
					Контакти
				</span>
			</div>
			<div className="mb-8">
				<ul>
					<li>
						<FooterLink href="tel:+380964983420"> 096 498 34 20</FooterLink>
					</li>
					<li>
						<FooterLink href="mailto:serhijsav@gmail.com">
							serhijsav@gmail.com
						</FooterLink>
					</li>
				</ul>
			</div>
			<hr className="relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-500 mb-8" />
			<div>
				<span className="text-xl font-semibold text-white">🍕 PizzaStack</span>
			</div>
		</div>
	)
}

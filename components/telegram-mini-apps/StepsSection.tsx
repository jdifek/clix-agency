'use client'

import { motion } from 'framer-motion'

const processSteps = [
	{
		title: 'Consultation & Planning',
		description:
			'We begin by understanding your unique requirements and goals, providing expert consultation to outline the most efficient and effective approach to building your Telegram Mini App.',
	},
	{
		title: 'Design & Prototyping',
		description:
			'Our team designs intuitive and user-friendly interfaces, ensuring your app adheres to Telegram’s design principles, followed by the creation of interactive prototypes to visualize the user experience.',
	},
	{
		title: 'Development & Integration',
		description:
			'The development process begins with coding your Telegram Mini App, followed by seamless integration with Telegram’s APIs to ensure full functionality, smooth performance, and secure data management.',
	},
	{
		title: 'Testing & Quality Assurance',
		description:
			'We conduct thorough testing to ensure your Mini App is bug-free, stable, and performs as expected, with a focus on functionality, security, and compatibility across different devices and Telegram versions.',
	},
	{
		title: 'Deployment & Maintenance',
		description:
			'Once the app is fully developed and tested, we deploy it within Telegram and provide ongoing maintenance and updates to keep the app running smoothly and ensure it evolves with platform changes.',
	},
]

export default function StepsSection() {
	return (
		<section className='relative py-16 px-6 md:px-12 lg:px-20'>
			{/* line */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary/10 via-primary/30 to-transparent'></div>
			</div>

			{/* title */}
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className='text-center mb-12'
			>
				<h2 className='text-3xl font-extrabold tracking-wide'>
					Our Telegram Mini Apps Development Process
				</h2>
				<p className='text-lg text-muted-foreground mt-4'>
					Streamlining the Development of Your Telegram Mini Apps: Our Proven
					Process
				</p>
			</motion.div>

			{/* steps */}
			<div className='flex flex-col gap-12 relative max-w-4xl mx-auto'>
				{processSteps.map((step, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
						className='relative p-6 bg-muted border border-border rounded-xl shadow-lg overflow-hidden group'
					>
						{/* number */}
						<div className='absolute -top-1 -left-1 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full group-hover:bg-gradient-to-r group-hover:from-[#0e62e4] group-hover:via-[#7fb3ff] group-hover:to-[#0e62e4] group-hover:bg-[length:200%_auto] group-hover:transition-all group-hover:duration-500 group-hover:animate-gradient'>
							{String(index + 1).padStart(2, '0')}
						</div>

						{/* line */}
						{index !== processSteps.length - 1 && (
							<div className='absolute left-6 top-full h-12 w-0.5 bg-border'></div>
						)}

						{/* content */}
						<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
						<h3 className='text-xl font-bold group-hover:text-transparent text-primary group-hover:bg-gradient-to-r group-hover:from-[#0e62e4] group-hover:via-[#7fb3ff] group-hover:to-[#0e62e4] group-hover:bg-[length:200%_auto] group-hover:bg-clip-text group-hover:transition-all group-hover:duration-500 group-hover:animate-gradient'>
							{step.title}
						</h3>
						<p className='text-muted-foreground mt-2'>{step.description}</p>
					</motion.div>
				))}
			</div>
		</section>
	)
}